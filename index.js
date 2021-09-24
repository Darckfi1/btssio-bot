const Discord   = require('discord.js');
const fs        = require('fs')
const client    = new Discord.Client();
const PREFIX      = "+";
const config = require('./config.json');


client.commands    = new Discord.Collection();



client.on('ready', () => {
    console.log("|--------------------(Loading Client)------------------------|");
    console.log("#################################");
    console.log("#################################");
    console.log("##           BTS SIO           ##");
    console.log("##          Etude CNED         ##");
    console.log("##           Darckfil          ##");
    console.log("#################################");
    console.log("#################################");

    console.log(`${client.user.username} est connecté !`);
    var Act = [
      `+help | Béta`
     ];
     setInterval(function() {
      var Act2 = Act[Math.floor(Math.random()*Act.length)];
     client.user.setActivity(Act2, { type: `STREAMING` , url:"https://twitch.tv/url"})
     }, 15000);
     });

     fs.readdir('./Commandes/', (error, f) => {
        if (error) { return console.error(error); }
        console.log("|--------------------(Loading Commands)------------------------|");
            let commandes = f.filter(f => f.split('.').pop() === 'js');
            if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }
    
            commandes.forEach((f) => {
                let commande = require(`./Commandes/${f}`);
                console.log(`${f} commande chargée !`);
                client.commands.set(commande.help.name, commande);
            });
  });
    
  fs.readdir('./Events/', (error, f) => {
        if (error) { return console.error(error); }
        console.log("|--------------------(Loading Events)------------------------|");
            console.log(`${f.length} events chargés`);
    
            f.forEach((f) => {
                let events = require(`./Events/${f}`);
                let event = f.split('.')[0];
                client.on(event, events.bind(null, client));
            });
  });

  client.on("guildMemberAdd", (member) => {

    let channel = client.channels.get('885429230178033694');

    channel.send(`Hey ${member.user}, Bienvenue sur le serveur!`); 
});

  client.on("guildMemberAdd", function(member) {
    if (member.guild.id === "885429229720846358") {
        var bvn_embed = new Discord.MessageEmbed()
        .setColor('#2ecc71')
        .setDescription(`Bienvenue ${member.user.tag} sur le serveur __BTS SIO CNED__`)
        .setFooter(`• Nous sommes actuellement : `, member.guild.memberCount)
        client.channels.cache.get("885429230178033694").send(bvn_embed)
    }
  });
  
  client.on("guildMemberRemove", function(member) {
    if (member.guild.id === "885429229720846358") {
        var aurevoir_embed = new Discord.MessageEmbed()
        .setColor('#e74c3c')
        .setDescription(`A plus dans le bus ${member.user.tag}`)
        .setFooter(`• Nous sommes actuellement : `, member.guild.memberCount)
        client.channels.cache.get("885429230178033694").send(aurevoir_embed)
    }
  });



  client.on("guildCreate", guild => {
    let embed = new Discord.MessageEmbed()
    .setColor("#15f153")
    .setTitle(`Bot ajouté !`)
    .setThumbnail(client.user.avatarURL())
    .addField('👑 ID Propriétaire : ', `<@${guild.ownerID}>`)
    .addField('🎫 Nom du serveur : ', guild.name, true)
    .addField('📋 ID : ' , guild.id, true)
    .addField('👨‍👨‍👦‍👦 Nombre de joueur : ', guild.memberCount)
    .setFooter(`Actuellement sur : ${client.guilds.cache.size} serveurs`)


client.channels.cache.get("882653721048264814").send(embed)
});

client.on("guildDelete", guild => {
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`Bot supprimé :cry:`)
    .setThumbnail(client.user.avatarURL())
    .addField('👑 ID Propriétaire : ' , `<@${guild.ownerID}>`)
    .addField('🎫 Nom du serveur : ', guild.name, true)
    .addField('📋 ID : ' , guild.id, true)
    .addField('👨‍👨‍👦‍👦 Nombre de joueur : ', guild.memberCount, true)
    .setFooter(`Actuellement sur : ${client.guilds.cache.size} serveurs`)


client.channels.cache.get("882653721048264814").send(embed)
});




const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

client.on("message", (message) => {
 
    const ms = require("ms"); // npm install ms
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "reroll-giveaway"){
        let messageID = args[0];
        client.giveawaysManager.reroll(messageID).then(() => {
            message.channel.send("Succès! Giveaway Reroll!");
        }).catch((err) => {
            message.channel.send("Aucun giveaway trouvé pour "+messageID+", S'il vous plaît, vérifiez et essayez à nouveau");
        });
    }
 
});


client.on('message', (message) => { //whenever a message is sent
    if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
      message.delete() //delete the message
        .then(message.channel.send('**Les liens de serveur ne sont pas autorisé**'))
        
    }
  })

client.on("message", (message) => {
 
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 
    if(command === "delete-giveaway"){
        let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("Succès! Giveaway supprimé!");
        }).catch((err) => {
            message.channel.send("Aucun giveaway trouvé pour "+messageID+", S'il vous plaît, vérifiez et essayez à nouveau");
        });
    }
 
});

client.login(config.token);