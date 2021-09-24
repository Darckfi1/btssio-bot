const Discord = require("discord.js"); 
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = async (bot, message, args) => {
    const non = bot.emojis.cache.get(emoji.non);
    const verif  = bot.emojis.cache.get(emoji.verif);



    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${non} Vous n'avez pas la permission`)
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(`${non} Je n'ai pas la permission`)

    var mgrade = new Discord.MessageEmbed()
    
    .setColor(`#ff0000`)
    .setDescription(`${non} Mentionnez un grade.`)

    let aMember = message.mentions.members.first()
    if(!aMember) return message.channel.send(`${non} Mentionnez un utilisateur.`)
    let role = message.guild.roles.cache.find(r => r.name == args[1]) || message.guild.roles.cache.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send(mgrade)
 
    var mdgrade = new Discord.MessageEmbed()
    
    .setColor(`#ff0000`)
    .setDescription(`${non} ${aMember} à déjà ce rôle.`)

    if(aMember.roles.cache.has(role.id)) {
        return message.channel.send(mdgrade)
    } else {
        await aMember.roles.add(role.id)

        var msgfin = new Discord.MessageEmbed()
    
        .setColor(`#ff0000`)
        .setDescription(`${verif} Le rôle, **${role.name}** vous a été ajouté sur le serveur __${message.guild.name}__ par ${message.author.username}`)

        aMember.createDM().then( channel => {
            channel.send(msgfin)
        })
    
    }
 
}
 
module.exports.help = {
    name: "addrole"
}