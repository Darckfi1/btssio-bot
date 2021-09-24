const Discord = require('discord.js');
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {

const userl = message.mentions.users.first()
 
const membre = message.mentions.members.first() || message.member;
const non = client.emojis.cache.get(emoji.non);
if (talkedRecently.has(message.author.id)) {
    message.channel.send("Attendez 5 secondes avant de taper à nouveau.");
} else {
            var ErrorMentionUser = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${non}: Merci de mentionner un utilisateur, ou un bot.`)
 
            var ErrorinvalidUser = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`${non}: Merci de renseigner un autre utilisateur que vous.`)
 
            if(!userl) return message.channel.send(ErrorMentionUser)
            if (message.author == userl) return message.channel.send(ErrorinvalidUser)
 
            const love = Math.floor(Math.random() * 100);
 
            if (love <= 10 ) {
                var EmbedLoveResult = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("[Amour] ❤ Lovecalc ❤ [Amour]")
                .setDescription("_Calcul du pourcentage d'amour entre " + message.author.username + " et " + membre.user.username + "_")
                .addField("Résultat :", love + "%")

                message.channel.send(EmbedLoveResult)
            } 
            
            else if (love > 10 <= 50 ) {
                var EmbedLoveResult = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("[Amour] ❤ Lovecalc ❤ [Amour]")
                .setDescription("_Calcul du pourcentage d'amour entre " + message.author.username + " et " + membre.user.username + "_")
                .addField("Résultat :", love + "%")
   
                message.channel.send(EmbedLoveResult)
            }
 
            else if (love > 50 <= 75 ) {
                var EmbedLoveResult = new Discord.MessageEmbed()
                .setColor("#0090ff")
                .setTitle("[Amour] ❤ Lovecalc ❤ [Amour]")
                .setDescription("_Calcul du pourcentage d'amour entre " + message.author.username + " et " + membre.user.username + "_")
                .addField("Résultat :", love + "%")
  
                message.channel.send(EmbedLoveResult)
 
            } 
 
            else if (love > 75 <= 100 ) {
 
                var EmbedLoveResult = new Discord.MessageEmbed()
                .setColor("#0090ff")
                .setTitle("[Amour] ❤ Lovecalc ❤ [Amour]")
                .setDescription("_Calcul du pourcentage d'amour entre " + message.author.username + " et " + membre.user.username + "_")
                .addField("Résultat :", love + "%")
        
                message.channel.send(EmbedLoveResult)
            } 
 
            else if (love == 100 ) {
 
                var EmbedLoveResult = new Discord.MessageEmbed()
                .setColor("#86ff00")
                .setTitle("[Amour] ❤ Lovecalc ❤ [Amour]")
                .setDescription("_Calcul du pourcentage d'amour entre " + message.author.username + " et " + membre.user.username + "_")
                .addField("Résultat :", love + "%")
          
                message.channel.send(EmbedLoveResult)
            }
            talkedRecently.add(message.author.id);
            setTimeout(() => {
              // Removes the user from the set after a minute
              talkedRecently.delete(message.author.id);
            }, 5000);
        }
        message.delete()
        }

  module.exports.help= {
 name: "lovecalc"
 };