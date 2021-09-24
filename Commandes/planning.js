const Discord = require('discord.js');
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {
    const protect = client.emojis.cache.get(emoji.protect);
    const erreur = client.emojis.cache.get(emoji.non);
    const verif = client.emojis.cache.get(emoji.verif);

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(`${erreur} **Vous avez pas la permission Administrateur**`);
    let answers = [`https://zupimages.net/up/21/36/j9vr.png`]

    let prsofile_embed = new Discord.MessageEmbed()
    .setColor('#b7ff00')
    .setTitle(`Planning recommandé par le CNED`)
    .setImage(answers[Math.floor(Math.random() * answers.length)])
    .setFooter(`• ${client.user.username}`, client.user.avatarURL())
     
    const embed2 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Planning mis en place avec succès`)
  
      message.channel.send(embed2)

    client.channels.cache.get("885429230178033695").send(prsofile_embed)
    



}




module.exports.help= {
    name: "planning"
};