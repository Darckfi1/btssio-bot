const Discord = require('discord.js');
const client  = new Discord.Client();


module.exports.run = async (client, message, args) => {
   const channelID = `886145866195423252`

   const updateMembers = (guild) => {
       const channel = guild.channels.cache.get(channelID)
       channel.setName(`Membres : ${message.guild.memberCount}`)
   }
   const guild = client.guilds.cache.get(`885429229720846358`)
   updateMembers(guild)


}

module.exports.help= {
   name: "membercount"
};