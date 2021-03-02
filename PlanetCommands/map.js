const Discord = require('discord.js');
const fs = require('fs');
const inv = require('../inventory.json');

module.exports.run = async(bot, message, args) => {

    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount First!!!");

    if(inv[message.author.id].lvl >= 1) {
        var planet1 = "🔓"
    } else {
        var planet1 = "🔒"
    }
    
    if(inv[message.author.id].lvl >= 2) {
        var planet2 = "🔓"
    } else {
        var planet2 = "🔒"
    }

    if(inv[message.author.id].lvl >= 3) {
        var planet3 = "🔓"
    } else {
        var planet3 = "🔒"
    }

    if(inv[message.author.id].lvl >= 4) {
        var planet4 = "🔓"
    } else {
        var planet4 = "🔒"
    }

    if(inv[message.author.id].lvl >= 5) {
        var planet5 = "🔓"
    } else {
        var planet5 = "🔒"
    }

    if(inv[message.author.id].lvl >= 6) {
        var planet6 = "🔓"
    } else {
        var planet6 = "🔒"
    }

    if(inv[message.author.id].lvl >= 7) {
        var planet7 = "🔓"
    } else {
        var planet7 = "🔒"
    }

    if(inv[message.author.id].lvl >= 8) {
        var planet8 = "🔓"
    } else {
        var planet8 = "🔒"
    }
//Ship Status
    if(inv[message.author.id].spaceship === 1){
        var spaceshipIcon = '<:HasRocket:789610063442083840>';
    } else var spaceshipIcon = '<:NoRocket:789610269710090250>';

    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField("`"+planet1+"` <:Mercuryremovebgpreview:789307040051888128> `Mercury` - Level 1", 'This place is for beginners.')
    .addField("`"+planet2+"` <:Venusremovebgpreview:789307740358836224> `Venus` - Level 2", 'Something bad lives here.')
    .addField("`"+planet3+"` <:Earthremovebgpreview:789308430610989058> `Earth` - Level 3", 'I heard you can find wood here!')
    .addField("`"+planet4+"` <:Marsremovebgpreview:789308763151794207> `Mars` - Level 4", 'Signs of life.')
    .addField("`"+planet5+"` <:Jupiterremovebgpreview:789309096515338251> `Jupiter` - Level 5", 'The King of Planets.')
    .addField("`"+planet6+"` <:Saturnremovebgpreview:789309334881435659> `Saturn` - Level 6", 'Those rings may have some useful resources.')
    .addField("`"+planet7+"` <:Uranusremovebgpreview:789310236007727114> `Uranus` - Level 7", "If you like it the you should of put a ring on it!")
    .addField("`"+planet8+"` <:Neptuneremovebgpreview:789309572791402537> `Neptune` - Level 8", 'Only Top Tier Pioneers venture here.')
    .setFooter(`Current Location: ${inv[message.author.id].planet}`)
    .setThumbnail('https://cdn.cdnparenting.com/articles/2019/03/23185510/577527586-H.jpg')

    message.channel.send(embed);
}

module.exports.help = {
    name: "map",
    aliases: []
}