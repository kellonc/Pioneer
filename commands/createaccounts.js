const Discord = require('discord.js');
const inventory = require('../inventory.json');
const fs = require('fs');
const crates = require('../crates.json');
const pets = require('../pets.json');

module.exports.run = async(bot, message, args) => {
    var user = message.author;

    if(inventory[user.id] && crates[user.id]) return message.channel.send("Your account is already Updated.");

    if(!inventory[user.id]) {
        inventory[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            shards: 100,
            xp: 0,
            lvl: 1,
            wood: 0,
            metal: 0,
            iron: 0,
            cobalt: 0,
            obsidian: 0,
            amethyst: 0,
            rubies: 0,
            sapphire: 0,
            emerald: 0,
            diamond: 0,
            gold: 0,
            forge: 0,
            rank: 'Trainee',
            health: 100,
            oxygen: 100,
            health_potion: 0,
            xp_potion: 0,
            planet: 'Mercury',
            spaceship: 0,
            
            

        }
        fs.writeFile("./inventory.json", JSON.stringify(inventory), (err)=>{
            if(err) console.log(err)
        });
    }

    if(!crates[user.id]) {
        crates[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            mercury: 0,
            venus: 0,
            earth: 0,
            mars: 0,
            jupiter: 0,
            saturn: 0,
            uranus: 0,
            neptune: 0
            
        }
        fs.writeFile("./crates.json", JSON.stringify(crates), (err)=>{
            if(err) console.log(err)
        });
    }


    return message.channel.send("Account Created/Updated!")
}

module.exports.help = {
    name: "createaccount",
    aliases: ["create"]
}