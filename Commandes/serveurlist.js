const Discord = require('discord.js');
const emoji = require('../emojis/emojis.json');
const config = require('../config.json');

module.exports.run = (client, message, args) => {
    const oui = client.emojis.cache.get(emoji.oui);
    const non = client.emojis.cache.get(emoji.non);
if (!message.guild) return
var args = message.content.trim().split(/ +/g)

var err = new Discord.MessageEmbed()

    .setColor(`#ff0000`)
    .setDescription(`${non} Vous ne pouvez pas effectuer cette commande car vous n'êtes pas mon propriétaire seul Darckfil#5766 peut. `)
    

    if(message.author.id !== config.owner) return message.channel.send(err);
    
    totalPeople = client.guilds.cache.map(person => person.memberCount).reduce(function (s, v) { return s + (v || 0); }, 0);
    var rep = new Discord.MessageEmbed()

    .setTitle(`${totalPeople} utilisateurs aux total | ${client.guilds.cache.size} serveur(s)`)
    .setColor(`#ff0000`)
  .setDescription(client.guilds.cache.map(r => `• ${r.name}` + `\n | \`${r.memberCount}\` membres | \`${r.ownerID}\``))
    message.channel.send(rep)
    message.delete()
}


module.exports.help= {
    name: "serveurlist"
};