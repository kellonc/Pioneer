const Discord = require('discord.js');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) => {

    if(!pets[message.author.id]) return;

    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Pet Shop")
    .addField('Space Dog <:SpaceDog:789925173947531364> -Price 2500: ','`Extends Oxygen by 50%`')
    .addField('Space Chimp <:SpaceMonkey:789923822827601941> -Price 2500: ','`Extends Health by 50%`')
    .addField('Space Cat','`Coming soon..`')
    .addField('Space Snake','`Coming soon..`')
    .setFooter("`/buypet *Pet Name*`")
    .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "petshop",
    aliases: []
}