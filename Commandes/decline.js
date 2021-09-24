const config = require('../config.json');
const Discord = require('discord.js');
const emoji = require('../emojis/emojis.json');

module.exports.run = async (bot, message, args) => {
    const protect = bot.emojis.cache.get(emoji.protect);
    const verif = bot.emojis.cache.get(emoji.verif);
    const log = bot.emojis.cache.get(emoji.log);
    const fun = bot.emojis.cache.get(emoji.rigole);
    const img = bot.emojis.cache.get(emoji.img);
    const game = bot.emojis.cache.get(emoji.game);
    const give = bot.emojis.cache.get(emoji.giveaway);
    const util = bot.emojis.cache.get(emoji.log);
    const lien = bot.emojis.cache.get(emoji.lien);
    const police = bot.emojis.cache.get(emoji.police);
    const non = bot.emojis.cache.get(emoji.non);
    const oui = bot.emojis.cache.get(emoji.oui);

    var errs = new Discord.MessageEmbed()

    .setColor(`#ff0000`)
    .setDescription(`${police} Vous n\'avez pas la permission d\'utiliser cette commande  `)
    
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send(errs)

    let channel;
    if(config.suggestion_channel_id){
      channel = await message.guild.channels.cache.get(config.suggestion_channel_id)
    } else channel = await message.guild.channels.cache.find(c => c.name == "suggestions" && c.type == "text");

    if(!channel){
    return message.channel.send(`${police} Je n'ai pas trouvé le slon de suggestion le serveur.`)
    };
    
    let messageS = args[0];
    if(!messageS){
      return message.channel.send(`${police} Veuillez me fournir un identifiant de message`)
    };

    
 try {

  var suggestionmessage = await channel.messages.fetch(messageS)
  
  } catch {

    return message.channel.send(`${police} je n'ai pas trouvé le message suivant`)
             
  };

  let reason = args.splice(1).join(" ")
  if(!reason) reason = `Aucune raison fournie`

  const description = suggestionmessage.embeds[0].description;
  const footer = suggestionmessage.embeds[0].footer.text;
  
  if(!suggestionmessage.embeds[0]){
      return message.channel.send(`${police} Invalid Suggestion`)
  };

  if(suggestionmessage.embeds[0].title !== `Nouvelle Suggestion`) {
 
      if(suggestionmessage.embeds[0].title === `Suggestion Accepté`){

               return message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${oui} La suggestion suivante a été approuvée`).setTimestamp().setColor('RED'));

      } else {

               return message.channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ format: 'png' })).setDescription(`${non} La suggestion suivante a été refusée`).setTimestamp().setColor('RED'));

      };
      
      
    };

    const newEmbed = new Discord.MessageEmbed()
    .setTitle('Suggestion Refusé')
    .setDescription(`${description}\n\n__**Refusé par:**__ ${message.author.tag}\n__**Raison:**__ ${reason}`)
    .setFooter(footer)
    .setColor("#ff0004")

    suggestionmessage.edit(newEmbed);
    suggestionmessage.reactions.removeAll();
    message.delete();
    
    return message.channel.send(`${oui} Refusé avec succès la suggestion dans ${channel}!\n\n${suggestionmessage.url}`)
    .then((s)=>{
        s.delete({timeout: 4000})
    })


    }

    module.exports.help = {
        name: "decline"
    }