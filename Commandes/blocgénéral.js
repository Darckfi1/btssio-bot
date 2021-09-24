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

      const embed1 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 1 – Support et mise à disposition de services informatiques – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12730)**`)

   
      const embed2 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 1 mis en place`)
  
      message.channel.send(embed2)

      bot.channels.cache.get("885429230178033698").send(embed1)

      const embed3 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 2 – SLAM – Conception et développement d’applications – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12737)**`)
      
      const embed22 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 2 – SISR – Administration des systèmes et des réseaux - 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12741)**`)

   
      const embed4 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 2 mis en place`)
  
      message.channel.send(embed4)

      bot.channels.cache.get("885441244958965770").send(embed3)
      bot.channels.cache.get("885441244958965770").send(embed22)


      const embed5 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 3 – Cybersécurité des services informatiques – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12731)**`)

   
      const embed6 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 3 mis en place`)
  
      message.channel.send(embed6)

      bot.channels.cache.get("885441704151371796").send(embed5)

      const embed7 = new Discord.MessageEmbed()
  
      .setAuthor(`Culture générale et expression - 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=814)**`)

   
      const embed8 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 4 mis en place`)
  
      message.channel.send(embed8)

      bot.channels.cache.get("885443256979181579").send(embed7)

      const embed9 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 5 – Expression et communication en langue anglaise – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12736)**`)

   
      const embed10 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 5 mis en place`)
  
      message.channel.send(embed10)

      bot.channels.cache.get("885442141667614760").send(embed9)

      const embed11 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 6 – Mathématiques pour l’informatique – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12734)**`)

   
      const embed12 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 6 mis en place`)
  
      message.channel.send(embed12)

      bot.channels.cache.get("885442367627362315").send(embed11)

      const embed13 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 6 – Algorithmique appliquée – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12733)**`)

   
      const embed14 = new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 6.2 mis en place`)
  
      message.channel.send(embed14)

      bot.channels.cache.get("885442554957545482").send(embed13)

      const embed15 = new Discord.MessageEmbed()
  
      .setAuthor(`BLOC 7 – Culture économique, juridique et managériale pour l’informatique – 1re année`)
      .setColor(`#0094ff`)
      .setThumbnail()
      .setDescription( `**[Page Internet  ](https://eformation.cned.fr/course/view.php?id=12739)**`)

   
      const embed16= new Discord.MessageEmbed()
  
      .setColor(`#79ff00`)
      .setDescription(`${verif} Bloc 7 mis en place`)
  
      message.channel.send(embed16)

      bot.channels.cache.get("885442628303351808").send(embed15)

    }






module.exports.help = {


name:"blocs"



}