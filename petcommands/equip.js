const Discord = require('discord.js');
const pets = require('../pets.json');
const fs = require('fs');

module.exports.run = async(bot, message, args) =>{
    if(!pets[message.author.id]) return;

    let equip = args.join(' ');

    if(equip.toLowerCase() === 'space dog'){

        if(!pets[message.author.id].spaceDog >= 1) return message.channel.send("You do not own this pet.");

        pets[message.author.id].equipped = 'Space Dog';
        fs.writeFile("./pets.json", JSON.stringify(pets), (err) => {
            if(err) console.log(err);
        });
        
        const spaceDogEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("`Equipped: Space Dog`<:SpaceDog:789925173947531364>")

        return message.channel.send(spaceDogEmbed);
    }//end of space dog

    if(equip.toLowerCase() === 'space chimp'){

        if(!pets[message.author.id].spaceChimp >= 1) return message.channel.send("You do not own this pet.");

        pets[message.author.id].equipped = 'Space Chimp';
        fs.writeFile("./pets.json", JSON.stringify(pets), (err) => {
            if(err) console.log(err);
        });
        
        const spaceDogEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("`Equipped Space Chimp`<:SpaceMonkey:789923822827601941>")

        return message.channel.send(spaceDogEmbed);
    }else return message.channel.send("That's not pet.");
}

module.exports.help = {
    name: "equip",
    aliases: []
}