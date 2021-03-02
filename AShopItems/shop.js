const Discord = require('discord.js');
const inv = require('../inventory.json');


module.exports.run = async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()

    embed.setTitle("Commander's Trading Post")
    embed.setColor("BLUE")
    embed.setDescription("Buy Basic Items here")
    embed.setFooter("Type ``/buy *Item Name*`` | Current Balance: "+inv[message.author.id].shards+"")
    embed.setTimestamp()
    embed.addFields(
        {
            name: "<:ForgeAnvil:789577207554506783> Forge - Price: **100 Shards**",
            value: "Craft better items with resources."
        },
        {
            name:"<:Health_Potion:789577974243786763> Health Potion - Price: **250 Shards**",
            value: "type /use *Health Potion*"
        },
        {
            name:"<:Oxygenremovebgpreview:789313388186566667> Refill - Price: **50 Shards**",
            value: "refills Oxygen so you don't lose health!"
        },
        {
            name:"<:XP_Potion:789577918350360597> XP Potion - Price: **250 Shards**",
            value: "Will give 300-800 XP"
        }
        
    )

    message.channel.send(embed);

}

module.exports.help = {
    name: "shop",
    aliases: []
}