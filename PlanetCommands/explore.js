const Discord = require('discord.js');
const fs = require('fs');
const inv = require('../inventory.json');
const crates = require('../crates.json');
const pets = require('../pets.json');
const talkedRecently = new Set();

module.exports.run = async(bot, message, args) => {
    if(!inv[message.author.id]) return message.channel.send("Please type /CreateAccount First!!!");
    if(!crates[message.author.id]) return message.channel.send("Please Type /CreateAccount  | this will update your account or create a new one if you have never used this bot before.")


    if (talkedRecently.has(message.author.id)) {
        return message.channel.send("Wait 10 seconds before typing this again.");
} else {

       
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    
      talkedRecently.delete(message.author.id);
    }, 10000);


    
    //beginning of mercury
    if(inv[message.author.id].planet === 'Mercury'){
        let events = ["event 1","event 2","event 3"]
        let event = events[Math.floor(Math.random() * events.length)]

        if(event === "event 1"){
            const mercury1 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setDescription("While exploring mercury..")
            .addField('Is that a Vehicle?!',"You've come across a Space Ship! I wonder where you could travel?", true)
            .addField('Claim This Item','Type `/claim`')
            .setFooter(`Location: ${inv[message.author.id].planet}`)
            .setThumbnail('https://cdn.discordapp.com/attachments/787752436797276191/789605559594254336/Explore_Mercury.png')
            .setTimestamp()

            message.channel.send(mercury1)

            message.channel.awaitMessages(m => m.author.id == message.author.id,
                {max: 1, time: 30000}).then(collected => {
                        // only accept messages by the user who sent the command
                        // accept only 1 message, and return the promise after 30000ms = 30s

                        // first (and, in this case, only) message of the collection
                        if (collected.first().content.toLowerCase() == '/claim') {

                            if(inv[message.author.id].spaceship === 1) return message.channel.send("You already have this Item.");

                            inv[message.author.id].spaceship = 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].xp += 150;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].shards += 300;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

                                const spaceShipEmbed = new Discord.MessageEmbed()
                                .setColor("GREEN")
                                .setDescription("`+150 XP`<:Xp:789326095274606593>\n`+1 🚀SpaceShip`\n`+300 Shards`<:Shards:789314489933496401>")
                                return message.channel.send(spaceShipEmbed);
                        }

                        else
                                return message.reply("You didn't claim the ship.. Continue on.");      
                }).catch(() => {
                        return message.reply("You didn't claim in time.");
                });
        } else if(event === 'event 2'){

            inv[message.author.id].xp += 150;
            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                if(err) console.log(err);
            });

            inv[message.author.id].shards += 500;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

            const mercury2 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("While exploring mercury.. You found\n`+150 XP`<:Xp:789326095274606593>\n`+500 Shards`<:Shards:789314489933496401>")

            return message.channel.send(mercury2);
        }else if(event === 'event 3'){
            
            const promptMercury3 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setThumbnail('https://cdn.discordapp.com/attachments/787752436797276191/789904119677845504/Mercury_Crate-removebg-preview.png')
            .setDescription("While exploring.. You found\n A Crate! Type `/claim`")

            message.channel.send(promptMercury3)

            message.channel.awaitMessages(m => m.author.id == message.author.id,
                {max: 1, time: 30000}).then(collected => {
                        // only accept messages by the user who sent the command
                        // accept only 1 message, and return the promise after 30000ms = 30s

                        // first (and, in this case, only) message of the collection
                        if (collected.first().content.toLowerCase() == '/claim') {

                            crates[message.author.id].mercury += 1;
                            fs.writeFile("./crates.json", JSON.stringify(crates), (err) => {
                                if(err) console.log(err);
                            });

                            inv[message.author.id].xp += 150;
                            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                                if(err) console.log(err);
                            });

                                const mercury3 = new Discord.MessageEmbed()
                                .setColor("GREEN")
                                .setDescription("`+150 XP`\n`+1 Mercury Crate`<:Mercury_Crate:789903613715546112>")

                                return message.channel.send(mercury3);
                        }

                        else
                                return message.reply("You didn't claim the crate!");      
                }).catch(() => {
                        return message.reply('No answer after 30 seconds, operation canceled.');
                });

        }//end of event 3


    }else if(inv[message.author.id].planet === 'Venus'){
        let venusEvents = ["event 1", "event 2"]
        let venusEvent = venusEvents[Math.floor(Math.random() * venusEvents.length)]

        if(venusEvent === "event 1"){

            inv[message.author.id].xp += 300;
            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                if(err) console.log(err);
            });

            inv[message.author.id].shards += 1000;
            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                if(err) console.log(err);
            });

            const venus1 = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("While exploring Venus, You found..\n `+300 XP`<:Xp:789326095274606593>\n`+1000 Shards`<:Shards:789314489933496401>")
            
            return message.channel.send(venus1);
        }//end of event 1

        if(venusEvent === 'event 2'){

            if(pets[message.author.id]){

                inv[message.author.id].xp += 1000;
            fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                if(err) console.log(err);
            });

                const pogEmbed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription("While exploring Venus, You found..\n `+1000 XP`<:Xp:789326095274606593>")

                return message.channel.send(pogEmbed);
            } else if(!pets[message.author.id]) {
                pets[message.author.id] = {
                    name: bot.users.cache.get(message.author.id).tag,
                    spaceDog: 0,
                    spaceChimp: 0,
                    spaceCat: 0,
                    spaceSnake: 0,
                    spaceDragon: 0,
                    equipped: "None"
                    
                }
                fs.writeFile("./pets.json", JSON.stringify(pets), (err)=>{
                    if(err) console.log(err)
                });

                inv[message.author.id].xp += 2500;
                fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                    if(err) console.log(err);
                });

                const venus2 = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("PETS!")
                .setDescription("You've gained access to pets! Check out the Help menu, to see your options.\n\n `+2500`<:Xp:789326095274606593>")

               return message.channel.send(venus2);

            }}

        } else if(inv[message.author.id].planet === 'Earth'){
            let earthEvents = ["event 1"]
            let earthEvent = earthEvents[Math.floor(Math.random() * earthEvents.length)]

            let numberEarth = Math.floor(Math.random() * 30)

            if(earthEvent === 'event 1'){

                if(!inv[message.author.id].wood){
                inv[message.author.id].wood = [];
                fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                    if(err) console.log(err);
                });
            }
                
                 inv[message.author.id].wood += numberEarth;
                fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
                    if(err) console.log(err);
                });

                const woodEmbedEarth = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setTitle("Wood?!")
                .setDescription("You've found <:woodd:810938790301794357>`"+numberEarth+"`!")

                return message.channel.send(woodEmbedEarth)
            }
        }
    
    }

}

module.exports.help = {
    name: "explore",
    aliases: []
}