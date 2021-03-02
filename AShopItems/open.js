const Discord = require('discord.js');
const crates = require('../crates.json');
const fs = require('fs');
const inv = require('../inventory.json');

module.exports.run = async(bot, message, args) =>{
    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount");

    let open = args.join(' ');

    let items = [{
        name: "`+1 Health Potion`<:Health_Potion:789577974243786763>",
        letter: 'a'
    },
    {
        name: "`+1 XP Potion`<:XP_Potion:789577918350360597>",
        letter: 'b'
    }]

    let pick = items[Math.floor(Math.random() * items.length)]

    if(open.toLowerCase() === 'mercury crate'){
        if(crates[message.author.id].mercury === 0) return message.channel.send("You don't have any crates to open.");

        crates[message.author.id].mercury -= 1;
        fs.writeFile("./crates.json", JSON.stringify(crates), (err) => {
            if(err) console.log(err);
        });

        if(pick.letter === 'a'){
            inv[message.author.id].health_potion += 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
        }

        if(pick.letter === 'b'){
            inv[message.author.id].xp_potion += 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
        }

        if(open.toLowerCase() === 'venus crate'){
            if(crates[message.author.id].venus === 0) return message.channel.send("You don't have any crates to open.");
    
            crates[message.author.id].venus -= 1;
            fs.writeFile("./crates.json", JSON.stringify(crates), (err) => {
                if(err) console.log(err);
            });
    
            if(pick.letter === 'a'){
                inv[message.author.id].health_potion += 1;
            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                if(err) console.log(err);
            });
            }
    
            if(pick.letter === 'b'){
                inv[message.author.id].xp_potion += 1;
            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                if(err) console.log(err);
            });
            }}



        const venCrate = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${pick.name}`)

        return message.channel.send(venCrate);
    } else return message.channel.send("Not a crate name.");
}

module.exports.help = {
    name: "open",
    aliases: []
}