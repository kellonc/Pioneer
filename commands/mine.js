const Discord = require('discord.js');
const inv = require('../inventory.json');
const fs = require('fs');
const talkedRecently = new Set();

module.exports.run = async(bot, message, args) =>{

    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount First!!!");

    if (talkedRecently.has(message.author.id)) {
        return message.channel.send("Wait 10 seconds before typing this again.");
} else {

       
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    
      talkedRecently.delete(message.author.id);
    }, 10000);
}

    
    let hrandom = Math.floor(Math.random() * 15)

    let hrandomXP = Math.floor(Math.random() * 15)

    let oreOptions = [
        {
            name: 'metal',
            inventory: (inv[message.author.id].metal)
    },
    {
        name: 'iron',
        inventory: (inv[message.author.id].iron)
    },
    {
        name: 'cobalt',
        inventory: (inv[message.author.id].cobalt)
    },
    {
        name: 'amethyst',
        inventory: (inv[message.author.id].amethyst)
    },
    {
        name: 'rubies',
        inventory: (inv[message.author.id].rubies)
    },
    {
        name: 'sapphire',
        inventory: (inv[message.author.id].sapphire)
    },
    {
        name: 'emerald',
        inventory: (inv[message.author.id].emerald)
    },
    {
        name: 'diamond',
        inventory: (inv[message.author.id].diamond)
    },
    {
        name: 'gold',
        inventory: (inv[message.author.id].gold)
    },
    ]

    let ore = oreOptions[Math.floor(Math.random() * oreOptions.length)]



    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("⛏️Mining..")
    .setDescription("You gained:\n `+"+hrandom+" "+ore.name+"`\n`+"+hrandomXP+ " XP`")
    .setFooter('Type /inventory to see your items!')

    inv[message.author.id].xp += hrandomXP;
    fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
        if(err) console.log(err);
    });

    if(ore.name === 'metal') {
        inv[message.author.id].metal += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'iron') {
        inv[message.author.id].iron += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'cobalt') {
        inv[message.author.id].cobalt += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'amethyst') {
        inv[message.author.id].amethyst += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'rubies') {
        inv[message.author.id].rubies += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'sapphire') {
        inv[message.author.id].sapphire += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'emerald') {
        inv[message.author.id].emerald += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'diamond') {
        inv[message.author.id].diamond += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    } else if(ore.name === 'gold') {
        inv[message.author.id].gold += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    }

    message.channel.send(embed)
}

module.exports.help = {
    name: "mine",
    aliases: []
} 