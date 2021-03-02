const Discord = require('discord.js');
const inv = require('../inventory.json');
const fs = require('fs');

module.exports.run = async(bot, message, args) => {
    const travel = args.join(' ');

    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount First!!!");

    if(!inv[message.author.id].spaceship === 0) return message.channel.send("Hm.. It seems a space craft is needed first.");
    
    if(travel === inv[message.author.id].planet) return message.channel.send("You're already here!");

    if(travel.toLowerCase() === 'mercury'){
        
        if(!inv[message.author.id].lvl >= 1) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Mercury';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const MercuryEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789300449625899048/Location_3.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(MercuryEmbed);
    } else if(travel.toLowerCase() === 'venus'){
        if(!inv[message.author.id].lvl >= 2) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Venus';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const VenusEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789301112880234496/File_6.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(VenusEmbed);
    } else if(travel.toLowerCase() === 'earth'){
        if(!inv[message.author.id].lvl >= 3) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Earth';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const EarthEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789300676638670888/Location_4.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(EarthEmbed);
    } else if(travel.toLowerCase() === 'mars'){
        if(!inv[message.author.id].lvl >= 4) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Mars';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const MarsEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789301597301112852/Location_7.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(MarsEmbed);
    } else if(travel.toLowerCase() === 'jupiter'){
        if(!inv[message.author.id].lvl >= 5) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Jupiter';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const JupiterEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789300218448445470/Location_2.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(JupiterEmbed);
    } else if(travel.toLowerCase() === 'saturn'){
        if(!inv[message.author.id].lvl >= 6) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Saturn';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const SaturnEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789298217472098321/Location_1.3.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(SaturnEmbed);
    } else if(travel.toLowerCase() === 'uranus'){
        if(!inv[message.author.id].lvl >= 7) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Uranus';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const UranusEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789300848546676746/Location_5.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(UranusEmbed);
    } else if(travel.toLowerCase() === 'neptune'){
        if(!inv[message.author.id].lvl >= 8) return message.channel.send("Your level is too low.");

        inv[message.author.id].planet = 'Neptune';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        const NeptuneEmbed = new Discord.MessageEmbed()
        .setTitle("Traveling..🚀")
        .setColor("BLUE")
        .setImage('https://cdn.discordapp.com/attachments/667463437068140555/789301790931550248/Location_8.jpg')
        .setThumbnail('https://media3.giphy.com/media/a9YmpSNK3PTp75zFMt/giphy.gif')

        message.channel.send(NeptuneEmbed);
    } else return message.channel.send("That planet does not exist.");
}

module.exports.help = {
    name: "travel",
    aliases: []
}