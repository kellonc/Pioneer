const Discord = require('discord.js');
const fs = require('fs');
const pets = require('../pets.json');
const inv = require('../inventory.json');

module.exports.run = async(bot, message, args) =>{
    if(!pets[message.author.id]) return;

    let purchase = args.join(' ');

    if(purchase.toLowerCase() === 'space dog'){

        if(inv[message.author.id].shards < 2500) return message.channel.send("You don't have enough shards.")

        pets[message.author.id].spaceDog += 1;
        fs.writeFile("./pets.json", JSON.stringify(pets), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].shards -= 2500;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const dogEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("`+1 Space Dog` <:SpaceDog:789925173947531364>\n`-2500 Shards`<:Shards:789314489933496401>")

        return message.channel.send(dogEmbed);
    }

    if(purchase.toLowerCase()  === 'space chimp'){

        if(inv[message.author.id].shards < 2500) return message.channel.send("You don't have enough shards.")

        pets[message.author.id].spaceChimp += 1;
        fs.writeFile("./pets.json", JSON.stringify(pets), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].shards -= 2500;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const chimpEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("`+1 Space Chimp` <:SpaceMonkey:789923822827601941>\n`-2500 Shards`<:Shards:789314489933496401>")

        return message.channel.send(chimpEmbed);
    } else return message.channel.send("Not a valid pet name.")
    
}

module.exports.help = {
    name: "buypet",
    aliases: []
}