const Discord = require('discord.js');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) => {
    const embed = new Discord.MessageEmbed()

    

    embed.setColor("BLUE")
    embed.setTitle("˜”*°•.˜”*°•Pioneer RPG Help•°*”˜.•°*”˜")
    embed.setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')
    embed.setDescription("A Space based RPG Bot!")
    embed.addField("Trading Post:","`/Shop`, `/buy`")
    embed.addField("Colonist:", "`/CreateAccount`,  `/Profile`,  `/Inventory`")
    embed.addField("Actions:", "`/Mine`, `/Explore`,`/Open`,`/Use`")
    embed.addField("Universal:", "`/Leaderboard`(Global Levels), `/Map`, `/Travel`")
    embed.setFooter(`Requested by: ${message.author.username}`)
    embed.setTimestamp()

    if(pets[message.author.id]){
        embed.addField("<:SpaceDog:789925173947531364> Pet Access <:SpaceMoney:789923822827601941>","`/PetShop`,`/MyPets`,`/BuyPet *name*`")
    }

    return message.channel.send(embed);
}

module.exports.help = {
    name: "help",
    aliases: []
}