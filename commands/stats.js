const fetch = require("node-fetch");
const cheerio = require("cheerio");

module.exports.run = async(bot, message, args) => {
fetch("https://stackoverflow.com/questions/63141471/how-to-get-information-of-an-url-with-discord-js").then(res => res.text())
.then(html => {
    const $ = cheerio.load(html)
    const title = $("meta[property='og:title']")[0] || $("meta[name='twitter:title']")
    const description = $("meta[property='og:description']")[0] || $("meta[name='twitter:description']")[0]
    const image = $("meta[property='og:image']")[0] || $("meta[name='twitter:image']")[0]
    const nothing = $("meta[property='og:thisdoesntexists']")[0] // Try get something that doesn't exists

    console.log(title ? title.attribs.content : "no title") // How to get Information of an URL with discord.js
    console.log(description ? description.attribs.content : "no description") // Short description
    console.log(image ? image.attribs.content : "no image") // https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded
    console.log(nothing ? nothing.attribs.content : "Literally, nothing") // Literally, nothing
})
}

module.exports.help = {
    name: "stat",
    aliases: []
}