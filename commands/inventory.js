const Discord = require('discord.js');
const fs = require('fs');
const inv = require('../inventory.json');
const crates = require('../crates.json');

module.exports.run = async(bot, message, args) => {
    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount First!!!");
    if(!crates[message.author.id]) return message.channel.send("Please type /CreateAccount | This will update your account or create a new one if you've never played.");

    let resources = [];

    let craftables = [];

    let useables = [];

    if(inv[message.author.id].metal > 0){
        resources.push("\n`Metal ["+inv[message.author.id].metal+"]`")
    }

    if(inv[message.author.id].wood > 0){
        resources.push("\n`Wood ["+inv[message.author.id].wood+"]`")
    }

    if(inv[message.author.id].iron > 0){
        resources.push("\n`Iron ["+inv[message.author.id].iron+"]`")
    }

    if(inv[message.author.id].cobalt > 0){
        resources.push("\n`Cobalt ["+inv[message.author.id].cobalt+"]`")
    }
    

    if(inv[message.author.id].obsidian > 0){
        resources.push("\n`Obsidian ["+inv[message.author.id].obsidian+"]`")
    }
   

    if(inv[message.author.id].amethyst > 0){
        resources.push("\n`Amethyst ["+inv[message.author.id].amethyst+"]`")
    }

    if(inv[message.author.id].rubies > 0){
        resources.push("\n`Rubies ["+inv[message.author.id].rubies+"]`")
    }

    if(inv[message.author.id].sapphire > 0){
        resources.push("\n`Sapphire ["+inv[message.author.id].sapphire+"]`")
    }

    if(inv[message.author.id].emerald > 0){
        resources.push("\n`Emerald ["+inv[message.author.id].emerald+"]`")
    }

    if(inv[message.author.id].diamond > 0){
        resources.push("\n`Diamond ["+inv[message.author.id].diamond+"]`")
    }

    if(inv[message.author.id].gold > 0){
        resources.push("\n`Gold ["+inv[message.author.id].gold+"]`")
    }

    if(inv[message.author.id].health_potion > 0){
        useables.push("\n`Health Potions` <:Health_Potion:789577974243786763>`["+inv[message.author.id].health_potion+"]`")
    }

    if(inv[message.author.id].xp_potion > 0){
        useables.push("\n`XP Potions` <:XP_Potion:789577918350360597>`["+inv[message.author.id].xp_potion+"]`")
    }

    if(crates[message.author.id].mercury > 0){
        useables.push("\n`Mercury Crates` <:Mercury_Crate:789903613715546112>`["+crates[message.author.id].mercury+"]`")
    }

    if(crates[message.author.id].venus > 0){
        useables.push("\n`Venus Crates` <:VenusCrate:789913024756580402>`["+crates[message.author.id].venus+"]`")
    }

    if(crates[message.author.id].earth > 0){
        useables.push("\n`Earth Crates ["+crates[message.author.id].earth+"]`")
    }

    if(crates[message.author.id].mars > 0){
        useables.push("\n`Mars Crates ["+crates[message.author.id].mars+"]`")
    }

    if(crates[message.author.id].jupiter > 0){
        useables.push("\n`Jupiter Crates ["+crates[message.author.id].jupiter+"]`")
    }

    if(crates[message.author.id].saturn > 0){
        useables.push("\n`Saturn Crates ["+crates[message.author.id].saturn+"]`")
    }

    if(crates[message.author.id].uranus > 0){
        useables.push("\n`Uranus Crates ["+crates[message.author.id].uranus+"]`")
    }

    if(crates[message.author.id].neptune > 0){
        useables.push("\n`Neptune Crates ["+crates[message.author.id].neptune+"]`")
    }


    const embed = new Discord.MessageEmbed()
    embed.setColor("BLUE")
    embed.setTitle(`${message.author.username}'s Inventory`);
    embed.addField('Resources',`_______________\n${resources}`, true)
    embed.addField('Craftables',`_______________\n${craftables}`,true)
    embed.addField('Useables',`_______________\n${useables}`,true)
    embed.setFooter(`Report any Bugs!`)

    return message.channel.send(embed);
    
    
}

module.exports.help = {
    name: "inv",
    aliases: ["inventory","i"]
}