const Discord = require('discord.js');
const inv = require('../inventory.json');
const fs = require('fs');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) => {
    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount");

    const use = args.join(' ');

    if(use.toLowerCase() === 'health potion') {
      
        if(inv[message.author.id].health_potion === 0) return message.channel.send("You don't have this item.");

        if(inv[message.author.id].health === 100) return message.channel.send("Your health is already full.");

        inv[message.author.id].health_potion -= 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].xp += 15;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].health = 100;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        if(pets[message.author.id].equipped = 'Space Chimp'){
            inv[message.author.id].health = 150;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
        }

        const healthEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`+**15 XP**\n-**1 <:Health_Potion:789577974243786763> Health Potion**`)
        .setTimestamp()
        
        return message.channel.send(healthEmbed);
    } else if(use.toLowerCase() === 'xp potion'){
        if(inv[message.author.id].xp_potion === 0) return message.channel.send("You don't have this item.");

        inv[message.author.id].xp_potion -= 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const xpRandom = Math.floor(Math.random() * 800 + 300);

        inv[message.author.id].xp += xpRandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const xpEmbed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`+**${xpRandom} XP**\n-**1  <:XP_Potion:789577918350360597> XP Potion**`)
        .setTimestamp()

        message.channel.send(xpEmbed);
    } else return message.channel.send("Item not found.");
    
}

module.exports.help = {
    name: "use",
    aliases: []
}