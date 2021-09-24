const Discord = require('discord.js');
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {
  const oui = client.emojis.cache.get(emoji.oui);
  const non = client.emojis.cache.get(emoji.non);
  const jsp = client.emojis.cache.get(emoji.jsp);
  const impor = client.emojis.cache.get(emoji.impor);
  const protect = client.emojis.cache.get(emoji.protect);

  var ersrss = new Discord.MessageEmbed()

  .setColor(`#ff0000`)
  .setDescription(`${non} Veuillez mettre un nombre entre 1 et 50`)

  const membre = message.mentions.members.first() || message.member;
    
  if(!args[0]) return message.channel.send(ersrss)

if (!message.guild) return
var args = message.content.trim().split(/ +/g)
var args1 = message.content.split(" ").slice(1);
var verifynumber = isNaN(args1[0]);

var errs = new Discord.MessageEmbed()

.setColor(`#ff0000`)
.setDescription(`${non} Vous n\'avez pas la permission d\'utiliser cette commande  `)

var errss = new Discord.MessageEmbed()

.setColor(`#ff0000`)
.setDescription(`${non} Veuillez indiquer **un nombre**`)

var errsss = new Discord.MessageEmbed()

.setColor(`#ff0000`)
.setDescription(`${non} Veuillez indiquer **un nombre**`)

var errssss = new Discord.MessageEmbed()

.setColor(`#ff0000`)
.setDescription(`${non} Veuillez indiquer un nombre **inférieur ou égal à 50** `)

  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(errs)
  if(!args1[0]) return message.channel.send(errss)
  if(verifynumber === true ) return message.channel.send(errsss)
  if(args1[0] > 100) return message.channel.send(errssss)
  
  const embed = new Discord.MessageEmbed()
  
  .setColor(`#79ff00`)
  .setDescription(`**${oui} → ${args1[0]} messages** supprimés`)



  message.channel.bulkDelete(args1[0]).then(() =>{
      message.channel.send(embed)
      message.delete()

      
  }) 

}




module.exports.help= {
    name: "clear"
};