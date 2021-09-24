const Discord = require('discord.js');
const math = require(`mathjs`);
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = async (client, message, args) => {
    const protect = client.emojis.cache.get(emoji.protect);
    const non = client.emojis.cache.get(emoji.non);

    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 5 secondes avant de taper à nouveau.");
} else {

    let xdembss = new Discord.MessageEmbed()

    .setColor("#00ff00")
    .setDescription(`${non} Veuillez fournir une opération`)

    let xdembsss = new Discord.MessageEmbed()

    .setColor("#00ff00")
    .setDescription(`${non} Veuillez fournir une opération ** valide **`)

    if(!args[0]) return message.channel.send(xdembss);

    let resp;

    try {
        resp = math.evaluate(args.join(" "))
    } catch (e) {
        return message.channel.send(xdembsss)
    }

    const embed = new Discord.MessageEmbed()
    .setColor(0x808080)
    .setTitle('Calculatrice')
    .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
    .addField('Réponse', `\`\`\`css\n${resp}\`\`\``)

    
    message.channel.send(embed);
talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
}




module.exports.help = {
    name: "calc"
}