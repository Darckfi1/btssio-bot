const Discord = require('discord.js');
const client    = new Discord.Client();
const emoji = require('../emojis/emojis.json');
const disbut = require('discord-buttons');
disbut(client);

module.exports.run = (client, message, args) => {        
    const protect = client.emojis.cache.get(emoji.protect);
    const verif = client.emojis.cache.get(emoji.verif);
    const log = client.emojis.cache.get(emoji.log);
    const fun = client.emojis.cache.get(emoji.rigole);
    const img = client.emojis.cache.get(emoji.img);
    const game = client.emojis.cache.get(emoji.game);
    const give = client.emojis.cache.get(emoji.giveaway);
    const util = client.emojis.cache.get(emoji.log);
    const lien = client.emojis.cache.get(emoji.lien);
    const police = client.emojis.cache.get(emoji.police);
    const sourire = client.emojis.cache.get(emoji.sourire);
    const cned = client.emojis.cache.get(emoji.cned);

var help_embed = new Discord.MessageEmbed()
    
.setColor('#b7ff00')
.setThumbnail(client.user.avatarURL())
.setDescription(`:joystick: Menu des commandes : :joystick:
:pencil: Mon Prefix : \`+\`
${verif} Nombre de commandes disponibles : 16 commandes
---------------------------------------`)
.addField(`> ${police} **__Commandes Option SLAM__ (2)**`, "Ajoute ton grade en fonction de ton année \n ``1erslam`` | ``2emeslam``")
.addField(`> ${sourire} **__Commandes Option SISR__ (2)**`, "Ajoute ton grade en fonction de ton année \n ``1ersisr`` | ``2emesisr``")
.addField(`> ${game} **__Commandes Loisir__ (3)**`, "``8ball`` | ``lovecalc``| ``pierre-feuille-ciseaux``")
.addField(`> ${util} **__Commandes Utiles__ (9)**`, "``serveurinfo`` | ``botinfo`` | ``hastebin`` | ``météo`` | ``calc`` | ``nickname`` | ``addrole`` | ``suggest`` | ``clear``")
//.addField(`> ${log} **__Commandes Urei__ (3)**`, "``suggest`` | ``note`` | ``partenaire``")
//.addField(`> ${lien} **__Commandes Lien__**`, `**[Support ](https://discord.gg/E9j6S2wzb4)**` + " | " + `**[ Ajouter le bot](https://discord.com/oauth2/authorize?client_id=879684364496162818&scope=bot&permissions=1476403278)**`)
.setFooter(`• ${client.user.username}`, client.user.avatarURL())

let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://www.cned.fr/') 
  .setLabel('CNED');
  let button2 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://www.cned360.fr/uPortal/p/home') 
  .setLabel('CNED Inscrit');
  let button3 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://copiesenligne.cned.fr/') 
  .setLabel('CNED Dépot Copie'); 
  let button4 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/oauth2/authorize?client_id=885443622374342746&scope=bot&permissions=8') 
  .setLabel('Invite'); 

  let row = new disbut.MessageActionRow()
  .addComponents(button, button2, button3, button4);
message.channel.send(help_embed, row);




}


module.exports.help= {
    name: "help"
};