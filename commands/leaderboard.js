const Discord = require('discord.js');
const fs = require('fs');
const money = JSON.parse(fs.readFileSync("inventory.json"));

module.exports.run = async(bot, message, args, res) => {

  let numbers = {
    "🥇":1,
    "🥈":2,
    "🥉":3
  }
   

    let user = Object.keys(money).map((id) =>
    ({
      id,
      name: money[id].name,
      lvl: money[id].lvl
    })
  )
  
  const sortedUsers = user.sort((a, b) => (a.lvl < b.lvl) ? 1 : -1) // ternary operation, it's basically just a 'if'
  
const maxNumberOfUsersToDisplay = 10;

const embed = new Discord.MessageEmbed().setColor(0x4286f4).setTitle("Leaderboard -Levels").setDescription("🌎Top 10 Users🌎").addFields(
  sortedUsers.flatMap((userDoc, i) => {
    // flatMap will map and delete all the [] of the array
    if (!(i < maxNumberOfUsersToDisplay && i < 25)) return [];

    return {
      name: `${userDoc.name}`,
      value: `Lvl: ${userDoc.lvl}`
    };
  })
);

message.channel.send(embed);

    }

      

module.exports.help = {
    name: "leaderboard",
    aliases: ["lb"]
}