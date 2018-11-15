var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

});
bot.on('ready', () => {
  console.log('Bot Launched...')

});

bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.username + ' has joined the server!')

    var role = member.guild.roles.find('name', 'Noob');

    member.addRole(role)

});

bot.login(process.env.BOT_TOKEN);
