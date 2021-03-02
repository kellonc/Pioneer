const Discord = require('discord.js');
const fs = require('fs');
const inv = require('../inventory.json');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) => {
    const purchase = args.join(' ');

    if(purchase.toLowerCase() === 'forge') {

        if(inv[message.author.id].shards < 100) return message.channel.send("You don't have enough shards.");

        inv[message.author.id].shards -= 100;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });


        inv[message.author.id].forge += 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const embedForge = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**+1** <:ForgeAnvil:789577207554506783> ${purchase}`)

        return message.channel.send(embedForge);

    } else if(purchase.toLowerCase() === 'health potion'){
        if(inv[message.author.id].shards < 250) return message.channel.send("You don't have enough shards.");

        inv[message.author.id].shards -= 250;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });


        inv[message.author.id].health_potion += 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const embedHealth = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**+1** <:Health_Potion:789577974243786763> ${purchase}`)

        return message.channel.send(embedHealth);
    } else if(purchase.toLowerCase() === 'refill'){
        if(inv[message.author.id].shards < 50) return message.channel.send("You don't have enough shards.");
        inv[message.author.id].shards -= 50;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].oxygen = 100;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        if(pets[message.author.id]){
        if(pets[message.author.id].equipped = 'Space Dog'){
            inv[message.author.id].oxygen = 150;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
        }}

        const refillEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Successfully purchased ${purchase}`)

        message.channel.send(refillEmbed);
    } else if(purchase.toLowerCase() === 'xp potion'){
        if(inv[message.author.id].shards < 250 ){

            return message.channel.send("You don't have enough shards.");

        }

        inv[message.author.id].shards -= 250;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].xp_potion += 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const xpEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`**+1** <:XP_Potion:789577918350360597> ${purchase}`)
        
        message.channel.send(xpEmbed);
    } else return message.channel.send("That item does not exist.");


}

module.exports.help = {
    name: "buy",
    aliases: []
}