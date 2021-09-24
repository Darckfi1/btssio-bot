const hastebin = require('hastebin-gen');
const Discord = require('discord.js');
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = (bot, message, args) => {
  const protect = bot.emojis.cache.get(emoji.protect);

  if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 1 minute avant de taper à nouveau.");
} else {
    const embed = new Discord.MessageEmbed()

    .setColor("Ramdom")

    .setDescription(`Que voulez-vous publier dans Hastebin ?`)



     let haste = args.slice(0).join(" ")



        let type = args.slice(1).join(" ")



        if (!args[0]) { return message.channel.send(embed) }



        hastebin(haste).then(r => {


          let lo = new Discord.MessageEmbed()

          //.setAuthor(member.user.username)
          .setAuthor(`${message.author.tag}`)
          .setDescription("`Publié sur Hastebin à cette URL:`  " + r)


          message.channel.send(lo)
           
        }).catch(console.error);



        message.delete();

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }

}        



module.exports.help = {

  name: "hastebin"

}