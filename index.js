const Discord = require("discord.js");
const inv = require('./inventory.json');
const Util  = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const botconfig = require("./botconfig.json");
const PREFIX = "/";
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


//READ COMMANDS FOLDER
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`); 
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })})
})

//READ petCMDS FOLDER
fs.readdir("./petcommands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./petcommands/${f}`);
        console.log(`${f} loaded!`); 
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })})
})

//READ Planet commands FOLDER
fs.readdir("./PlanetCommands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./PlanetCommands/${f}`);
        console.log(`${f} loaded!`); 
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })})


//READ shopitems FOLDER
fs.readdir("./AShopItems/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./AShopItems/${f}`);
        console.log(`${f} loaded!`); 
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })
})})

//READ SERVERONLY FOLDER
fs.readdir("./serveronly/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldnt find any commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./serveronly/${f}`);
        console.log(`${f} loaded!`); 
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })
})
})



//empty space because Why Not have more space... Space go BRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR


//leveling and other standards idfk


bot.on("message", async message => {

    if(!inv[message.author.id]) return;

    if(message.content.startsWith('/')) {
        if(inv[message.author.id].oxygen === 0) return;
        inv[message.author.id].oxygen -= 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

}})
//lose health if oxygen = 0
bot.on("message", async message => {

    if(!inv[message.author.id]) return;

    if(inv[message.author.id].oxygen === 5){
        message.channel.send("⚠️Oxygen Warning⚠️")
    }

    if(message.content.startsWith('/')) {
        if(inv[message.author.id].oxygen === 0){
        inv[message.author.id].health -= 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        
    } else if(inv[message.author.id].health === 0) {
        inv[message.author.id].lvl = 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].health = 100;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        return message.reply("Health Depleted, Your Level has been reset.")
    }

    
}})


bot.on("message", async message => {

    if(message.guild)
    
    if(!inv[message.author.id]) return;

    if(message.author.bot) return;

    inv[message.author.id].xp += 15;
    fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
        if(err) console.log(err);
    });

    if(inv[message.author.id].xp >= 5000) {
        inv[message.author.id].xp -= 5000;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

        inv[message.author.id].lvl += 1;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });

    }

    if(inv[message.author.id].lvl >= 5) {
        inv[message.author.id].rank = 'Explorer';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    }

    if(inv[message.author.id].lvl >= 15) {
        inv[message.author.id].rank = 'Commander';
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
    }



})


bot.setInterval(async (message) => {
    
 
    if (Math.random() < 0.7) {
      const guild = bot.guilds.cache.random()
     
      const channel = guild.channels.cache.filter(c => c.type === 'text').random()
  
        const embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setDescription("somebody dropped some shards!")
        .setFooter("Type `/grab` to pick them up")
         
             channel.send(embed)


        
      // Wait until someone responds with /grab or a minute
      const {author} = (await channel.awaitMessages(
        msg => msg.content.trim() === '/grab',
        // If you don’t want it to time out, remove time
        {max: 1, time: 600000, errors: ['time']}
      ).catch(() => {
        return channel.send("Nobody Picked up the shards.");
      })).first() 
      // author is the user who grabbed the wallet
      let hrandom = Math.floor(Math.random() * 2000)
      if(!inv[author.id]) message.channel.send("Please type /CreateAccount First!!!")
      inv[author.id].shards += hrandom;
        fs.writeFile("./inventory.json", JSON.stringify(inv), (err) => {
            if(err) console.log(err);
        });
      await channel.send(`You have picked up the shards. +**${hrandom}**`)

      
    }
  }, 3.6e+6)

})










//BOT ONLINE MESSAGE AND ACTIVITY
bot.on("ready", async () => {
    console.log(`${bot.user.username}, is online and is in ${bot.guilds.cache.size} Servers!`);
 
      let status = ["/Help",`made with JavaScript`]
      let randomStatus = status[Math.floor(Math.random() * status.length)]
      bot.user.setActivity(randomStatus, {type: 'STREAMING', url: 'https://www.youtube.com/watch?v=xjAj2NOvyus'});
     
     
  })
 

bot.on("message", async message => {

    //CHECK CHANNEL TYPE
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    //SET PREFIX
    let prefix = botconfig.prefix;

    //CHECK PREFIX, DEFINE ARGS and command
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();5
let command;
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot, message, args);

//RUN COMMANDS
if(bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
} else if (bot.aliases.has(cmd)) {
    command = bot.commands.get(bot.aliases.get(cmd));// messing  's' in commands also dont give up on life reeeee
}
try {
    command.run(bot, message, args);
} catch (e) {
    return;
}

})





 
//Put code above here to keep organized - Kellon's Note


//End of Index.. Let's keep it that way :)

bot.login(botconfig.token);//it should be config


