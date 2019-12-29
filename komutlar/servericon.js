
const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const client = new Discord.Client();
const db = require('quick.db');
require('moment-duration-format');



exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**SUNUCU ICONU**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
}; 

exports.help = {
  name: 'servericon', 
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};
