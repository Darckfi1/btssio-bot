const Discord = require("discord.js");
const emoji = require('../emojis/emojis.json');

module.exports.run = async (bot, message, args) => {
    const protect = bot.emojis.cache.get(emoji.protect);
    


    let role = message.guild.roles.cache.find(r => r.name == `» Membre`) || message.guild.roles.cache.find(r => r.id == `885451978686201856`)

message.member
    let aMember = message.mentions.members.first() || message.member

    if(aMember.roles.cache.has(role.id)) {
        return message.channel.send(`${aMember} à déjà ce rôle.`)
    } else {
        await aMember.roles.add(role.id)

        const embed1 = new Discord.MessageEmbed()
  
        .setColor(`#79ff00`)
        .setDescription(`${protect} L'utilisateur ${aMember} vien d'avoir le grade 1er année de SISR`)
        bot.channels.cache.get("885460561557606400").send(embed1)
    }
    message.delete()
 
}
 
module.exports.help = {
    name: "1ersisr"
}