const Discord = require('discord.js');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) =>{

    if(!pets[message.author.id]) return;

    let petList = [];

    let petDescription = [];


    if(pets[message.author.id].equipped === 'None'){
        petDescription.push("None")
    }

    if(pets[message.author.id].equipped === 'Space Dog'){
        petDescription.push("Increases Oxygen by 50% while equipped.")
    }

    if(pets[message.author.id].equipped === 'Space Chimp'){
        petDescription.push("Increases Health by 50% while equipped.")
    }

    if(pets[message.author.id].spaceDog >= 1){
        petList.push("<:SpaceDog:789925173947531364>`Space Dog ["+pets[message.author.id].spaceDog+"]`")
    }

    if(pets[message.author.id].spaceChimp >= 1){
        petList.push("<:SpaceMonkey:789923822827601941>`Space Chimp ["+pets[message.author.id].spaceChimp+"]`")
    }

    

    const embed = new Discord.MessageEmbed()
    embed.setColor("BLUE")
    embed.addField('Equipped Pet:',"`["+pets[message.author.id].equipped+"]`")
    embed.addField("Pet Description:","`"+petDescription+"`")
    embed.addField("Your Pets:",`|${petList}|`)
    embed.setFooter("Type `/Equip *Pet Name*` to Equip a pet and see it's description.")
    
    
    message.channel.send(embed);
    
}

module.exports.help = {
    name: "mypets",
    aliases: []
}