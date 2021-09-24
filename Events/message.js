const Discord = require('discord.js');
const PREFIX = '+';

module.exports = (bot, message) => {
    if (message.author.bot || message.channel.type === 'dm') { return; }
    if (!message.channel.permissionsFor(bot.user).has('SEND_MESSAGES')) { return; }
    if (!message.content.startsWith(PREFIX)) { return; }

        let args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = bot.commands.get(commande);

        if (!cmd) { return; }
            cmd.run(bot, message, args);
};