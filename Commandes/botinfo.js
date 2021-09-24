const Discord = require('discord.js');
const talkedRecently = new Set();
const ms = require('ms');
const os = require('os');
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {
  const acti = client.emojis.cache.get(emoji.acti);
  const PREFIX = ".";
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 1 minute avant de taper à nouveau.");
} else {
 
  totalPeople = client.guilds.cache.map(person => person.memberCount).reduce(function (s, v) { return s + (v || 0); }, 0);
  var embeds = new Discord.MessageEmbed()

    .setAuthor(`Information sur ${client.user.username}`)
    .setColor(`#5bfaa7`)
    .setThumbnail(client.user.avatarURL())

    .addField(`${acti} ${client.user.username}`, `• ID \`${client.user.id}\` \n • Prefix \`${PREFIX}\` \n • Mon Créateur \`Darckfil#5766\``)

    .addField(`:bar_chart: Statistiques`, `• Utilisateurs \`${totalPeople}\` \n • Serveurs \`${client.guilds.cache.size}\` \n • Nombre de salons et catégories \`${client.channels.cache.size}\``)

 .addField(`:desktop: Système`, `• Discord.js : \`12.2.0\` \n • Nodejs : \`v12.16.3\` \n • Plateforme : \`linux\` \n  • Uptime: ${ms(os.uptime() * 1000, { long: true })}`)

    .setFooter(`Rejoind le discord le : ${client.user.createdAt.toUTCString().substr(0, 16)}`)



  message.channel.send(embeds);
  message.delete()
talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }


}


module.exports.help= {
        name: "botinfo"
};