const Discord = require('discord.js');
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {
    const erreur = client.emojis.cache.get(emoji.non);
    const oui = client.emojis.cache.get(emoji.oui);
    const protect = client.emojis.cache.get(emoji.protect);
    const verif = client.emojis.cache.get(emoji.verif);
    const police = client.emojis.cache.get(emoji.police);

    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(`${erreur} **Vous avez pas la permission Administrateur**`);
    
    const membre = message.mentions.members.first() || message.member;
    
    if(!args[0]) return message.channel.send(`${erreur}Veuillez mettre un message `)
    

    let nick = args.join(" ");
    var sondage = new Discord.MessageEmbed()
    .setColor(`#0096fe`)
    .setDescription(`${police} ${nick}`)

    const embed2 = new Discord.MessageEmbed()
  
    .setColor(`#79ff00`)
    .setDescription(`${verif} Message envoyé avec succès`)

    message.channel.send(embed2)
    .then((s)=>{
        s.delete({timeout: 5000})
      })
    client.channels.cache.get("885429230178033697").send(sondage)

    
}


    

module.exports.help= {
    name: "annonce"
};