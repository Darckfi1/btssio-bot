const Discord = require('discord.js');
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {

    const oui = client.emojis.cache.get(emoji.oui);
    const non = client.emojis.cache.get(emoji.non);
    const jsp = client.emojis.cache.get(emoji.jsp);
    const pierre = client.emojis.cache.get(emoji.pierre);
    const impor = client.emojis.cache.get(emoji.impor);
    
if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 5 secondes avant de taper à nouveau.");
} else {

    var ersrss = new Discord.MessageEmbed()

    .setColor(`#ff0000`)
    .setDescription(`${non} Merci de mettre soit pierre/feuille/Ciseaux`)

    
        message.delete(message.author);
        var args = message.content.split(" ").slice(1);
        var tte = args.join(" ")
        if (!tte){
            return message.channel.send(ersrss)};
    
            var replys = [
            `${pierre} Pierre`,
            `:maple_leaf: Feuille`,
            `${pierre} Pierre`,
            `:scissors: Ciseaux`,
            `:scissors: Ciseaux`,
            `${pierre} Pierre`,
            `${pierre} Pierre`,
            `${pierre} Pierre`,
            `:maple_leaf: Feuille`,
            `:maple_leaf: Feuille`,
            `${pierre} Pierre`,
            `:maple_leaf: Feuille`,
            `:scissors: Ciseaux`,
            `${pierre} Pierre`,
            `:maple_leaf: Feuille`,
            `:scissors: Ciseaux`,
            `${pierre} Pierre`,
            `:maple_leaf: Feuille`,
            `:scissors: Ciseaux`,
            `${pierre} Pierre`,
            `:maple_leaf: Feuille`,
            `:scissors: :scissors: Ciseauxx`,
            `:maple_leaf: Feuille`
            ];
    
        var reponse = (replys[Math.floor(Math.random() * replys.length)])
    
        var bembed = new Discord.MessageEmbed()
        .setDescription("123 Pierre Feuille Ciceaux ")
        .addField("Moi", tte)
        .addField("BTS SIO", reponse)
        .setColor("RANDOM")
        .setFooter(`• ${client.user.username}`, client.user.avatarURL())
    message.channel.send(bembed)
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
}

module.exports.help= {
    name: "pierre-feuille-ciseaux"
};