const Discord = require("discord.js");
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = async (bot, message, args) => {
    const protect = bot.emojis.cache.get(emoji.protect);
    const verif = bot.emojis.cache.get(emoji.verif);
    const non = bot.emojis.cache.get(emoji.non);
    const disc = bot.emojis.cache.get(emoji.disc);
    const coeur = bot.emojis.cache.get(emoji.coeur);


    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send({embed: {color: "RED", description: `${non} Vous ne pouvez pas utiliser cette commande!`}})
      }

    const embed4 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 6 – Mathématiques pour l’informatique – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12734)**`)

   
      const embed2 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 6 mis en place`)
  
      message.channel.send(embed2)

      bot.channels.cache.get("885442367627362315").send(embed4)


    }






module.exports.help = {


name:"bloc6"



}