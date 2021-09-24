const config = require('../config.json');
const Discord = require('discord.js');
const emoji = require('../emojis/emojis.json');

module.exports.run = async (bot, message, args) => {
    const oui = bot.emojis.cache.get(emoji.oui);
    const non = bot.emojis.cache.get(emoji.non);
    const log = bot.emojis.cache.get(emoji.log);
    const fun = bot.emojis.cache.get(emoji.rigole);
    const img = bot.emojis.cache.get(emoji.img);
    const game = bot.emojis.cache.get(emoji.game);
    const give = bot.emojis.cache.get(emoji.giveaway);
    const util = bot.emojis.cache.get(emoji.log);
    const lien = bot.emojis.cache.get(emoji.lien);
    const police = bot.emojis.cache.get(emoji.police);
    const sourire = bot.emojis.cache.get(emoji.sourire);
    const cned = bot.emojis.cache.get(emoji.cned);

    let channel;
    if(config.suggestion_channel_id){
      channel = await message.guild.channels.cache.get(config.suggestion_channel_id)
    } else channel = await message.guild.channels.cache.find(c => c.name == "suggestions" && c.type == "text");

    if(!channel){
    return message.channel.send(`${police} Je n'ai pas trouvé le slon de suggestion le serveur.`)
    };

    const suggestion = args.slice(0).join(" ")
    if(!suggestion){
      return message.channel.send(`${police} Que voudriez-vous suggérer?`)
    };

    const embed = new Discord.MessageEmbed()
    .setTitle('Nouvelle Suggestion')
    .setDescription(`\`\`\`\n${suggestion}\`\`\``)
    .setFooter(`Suggestion de ${message.author.tag}`)
    .setTimestamp()
    .setColor("#00ffff")
    
    channel.send(embed)
    .then((s)=>{

    s.react(oui)
    s.react(non)

    })
    .catch(()=>{
      return message.reply(`${police} Impossible d'envoyer un message dans le salon suggestions.`)
    });
    
    message.delete();
    return message.channel.send(`${police} Votre suggestion a été envoyée avec succès dans ${channel}`)
    .then((s)=>{
      s.delete({timeout: 5000})
    })


    }

    module.exports.help = {
        name: "suggest"
    }