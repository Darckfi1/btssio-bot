const weather = require('weather-js');
const Discord = require('discord.js');
const talkedRecently = new Set();
const emoji = require('../emojis/emojis.json');

module.exports.run = (client, message, args) => {
    const non = client.emojis.cache.get(emoji.non);
    const protect = client.emojis.cache.get(emoji.protect);
    var ersrss = new Discord.MessageEmbed()

    .setColor(`#ff0000`)
    .setDescription(`${non} : Veuillez spécifier un emplacement`)
    .setFooter(`• ${client.user.username}`, client.user.avatarURL())

    var ersrsss = new Discord.MessageEmbed()

    .setColor(`#ff0000`)
    .setDescription(`${non} : **Localisation** invalide`)
    .setFooter(`• ${client.user.username}`, client.user.avatarURL())
    if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attendez 1 minutes avant de taper à nouveau.");
} else {

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(!args[0]) return message.channel.send(ersrss)

        if(result === undefined || result.length === 0) return message.channel.send(ersrsss);

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setAuthor(`Prévisions météo pour ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Fuseau horaire', `UTC${location.timezone}`, true)
        .addField('Unité', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Vent', current.winddisplay, true)
        .addField('Humidité', `${current.humidity}%`, true)

        message.channel.send(weatherinfo)

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    })
        }        
    }



module.exports.help= {
    name: "météo"
    };