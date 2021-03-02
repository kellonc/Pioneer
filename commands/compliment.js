const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

    let txt = args.join(' ')

    if(!args[0]){
        var user = message.author;
    } else var user = message.mentions.users.first()

    const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail('https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Science/H-P/heart.ngsversion.1396531395268.adapt.1900.1.jpg')
    .setDescription(txt)
    .setFooter('Sincerely, Anonymous69')

    user.send(embed)
    return message.channel.send("Your compliment has been sent!")
}

module.exports.help = {
    name: "compliment",
    aliases: ["comp"]
}