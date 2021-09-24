const Discord = require("discord.js");
const emoji = require('../emojis/emojis.json');

module.exports.run = async (client, message, args) => {
  const non = client.emojis.cache.get(emoji.non);
  const verif  = client.emojis.cache.get(emoji.verif);
  // You can make a single array to detect the user permissions.
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: `${non} Vous ne pouvez pas utiliser cette commande!`}})
  }
  
  let user = message.mentions.users.first(); // You can mention someone, not only just user.
  if (!user) return message.channel.send({embed: {color: "RED", description: `${non} Vous devez mentionner l'utilisateur!`}})
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: `${non} Vous devez saisir le surnom!`}})
  
  let member = message.guild.members.cache.get(user.id);
  
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}))
  return message.channel.send({embed: {color: "GREEN", description: `${verif} Modifié avec succès **${user.tag}** devient **${nick}**`}})

}

module.exports.help= {
    name: 'nickname'
};