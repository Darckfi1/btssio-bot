const Discord = require('discord.js');
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {

    const oui = client.emojis.cache.get(emoji.oui);
    const non = client.emojis.cache.get(emoji.non);
    const jsp = client.emojis.cache.get(emoji.jsp);
    const impor = client.emojis.cache.get(emoji.impor);
    const protect = client.emojis.cache.get(emoji.protect);

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 5 secondes avant de taper à nouveau.");
} else {

    var ersrss = new Discord.MessageEmbed()

    .setColor(`#ff0000`)
    .setDescription(`${non} Merci de me poser une question`)
    .setFooter(`• ${client.user.username}`, client.user.avatarURL())
    
        message.delete(message.author);
        var args = message.content.split(" ").slice(1);
        var tte = args.join(" ")
        if (!tte){
            return message.channel.send(ersrss)};
    
            var replys = [
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être",
            "Peut être",
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être",
            "Non",
            "Je sais pas",
            "Peut être",
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être",
            "Peut être",
            "Oui",
            "Non",
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être"
            ];
    
        var reponse = (replys[Math.floor(Math.random() * replys.length)])
    
        var bembed = new Discord.MessageEmbed()
        .setDescription("🎱 8ball")
        .addField("Question", tte)
        .addField("Réponse", reponse)
        .setColor("RANDOM")
        .setFooter(`Question de ${message.author.tag}`)

    message.channel.send(bembed)
      
  talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
}

module.exports.help= {
    name: "8ball"
};