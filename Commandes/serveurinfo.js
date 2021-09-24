const Discord = require("discord.js");
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = async (bot, message, args) => {
    const protect = bot.emojis.cache.get(emoji.protect);
    const verif = bot.emojis.cache.get(emoji.verif);
    const stat = bot.emojis.cache.get(emoji.stat);
    const disc = bot.emojis.cache.get(emoji.disc);
    const coeur = bot.emojis.cache.get(emoji.coeur);

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 5 secondes avant de taper à nouveau.");
} else {

    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;

    function Emoji(id) {
        return bot.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach((emoji) => {
        OverallEmojis++;
        if (emoji.animated) {
            Animated++;
            EmojisAnimated += Emoji(emoji.id);
        } else {
            EmojiCount++;
            Emojis += Emoji(emoji.id);
        }
    });

    const embed = new Discord.MessageEmbed()
  
  
    .setAuthor(`Information sur ${message.guild.name}`)
    .setDescription(`${coeur} Emoji \n• **Animé [${Animated}]**:\n${EmojisAnimated}\n• **Normal [${EmojiCount}]**:\n${Emojis}
    
    ----------------------------------`)
    .setThumbnail()
    .setColor(`#00ffe4`)
    .addField(`${disc} Serveurs`, `• Nom \`${message.guild.name}\` \n • ID \`${message.guild.id}\``)
    .addField(`${verif} Propriétaire`, `• Nom <@${message.guild.ownerID}> \n • ID \`${message.guild.ownerID}\``)
    .addField(`${protect} Sécutité`, `• Level de vérification \`${message.guild.verificationLevel}\``)
    .addField(`${stat} Caractéristique`, `• Total de membres \`${message.guild.memberCount}\` \n • Channels \`${message.guild.channels.cache.size}\` \n • Roles \`${message.guild.roles.cache.size}\``)
    
message.channel.send({embed});

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    }

}





module.exports.help = {


name:"serveurinfo"



}