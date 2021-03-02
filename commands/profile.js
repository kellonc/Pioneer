const Discord = require('discord.js');
const inv = require('../inventory.json');
const fs = require('fs');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) => {
    
    if(!args[0]) {
        var user =message.author;
    } else {
        var user = message.mentions.users.first();
    }

    if(inv[user.id].rank === 'Trainee'){
        var symbol = '<:Trainee:789575250706825297>';
    } else if(inv[user.id].rank === 'Explorer'){
        var symbol = '<:Explorerremovebgpreview:789315247533326337>';
    } else if(inv[user.id].rank === 'Commander'){
        var symbol = '<:Commanderremovebgpreview:789315756474761227>';
    }

    if(inv[user.id].spaceship === 1){
        var spaceshipIcon = '<:HasRocket:789617997823737886>';
    } else var spaceshipIcon = '<:NoRocket:789617873559093288>';

    if(!inv[user.id]){
        return message.channel.send("Account not found.. Please type /CreateAccount");
    }


    var healthOutOf = '100%';
    var o2OutOf = '100%';

    if(pets[message.author.id]){

    if(pets[message.author.id].equipped === "Space Dog"){
        var o2OutOf ='150%'
    } else var o2OutOf = '100%'

    if(pets[message.author.id].equipped === "Space Chimp"){
        var healthOutOf ='150%'
    } else var healthOutOf = '100%'

}

    const profileEmbed = new Discord.MessageEmbed()
    .setAuthor(`${user.username}'s Profile`, user.avatarURL())
    .setThumbnail(user.avatarURL())
    .setColor("BLUE")
    .addField('<:Heartremovebgpreview:789312552168456213> Health:',"`"+inv[user.id].health+"%/"+healthOutOf+"`", true)
    .addField('<:Oxygenremovebgpreview:789313388186566667> Oxygen:',"`"+inv[user.id].oxygen+"%/"+o2OutOf+"`", true)
    .addField('<:Shardsremovebgpreview:789314489933496401> Shards:',"`"+inv[user.id].shards+"`", true)
    .addField("<:Xp_removebgpreview:789326095274606593> XP:","`"+inv[user.id].xp+"/5,000`", true)
    .addField("Level:","`"+inv[user.id].lvl+"`", true)
    .addField(`${symbol} Rank:`,"`"+inv[user.id].rank+"`", true)
    .addField('Ship Status:',`${spaceshipIcon}`, true)
    .setFooter(`Current Location: ${inv[user.id].planet} As of`)
    .setTimestamp()

    inv[message.author.id].xp += 15;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

    message.channel.send(profileEmbed);
}

module.exports.help = {
    name: "profile",
    aliases: ["p"]
}