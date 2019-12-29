const Discord = require('discord.js');


exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`MunisBOT`, client.user.avatarURL)
      .setDescription("[Botu sunucuya ekle](https://discordapp.com/oauth2/authorize?client_id=660896189021159465&scope=bot&permissions=2146958847) | [Discord'uma Katıl!](https://discord.gg/7b6FHAh) | [Youtube](https://www.youtube.com/watch?v=eKy2MS5iS6U)\n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`MunisBot - Yardım`, `:white_small_square: | **+eğlence**: Sunucunuz için Eğlence Komutlarını Gösterir.!\n:white_small_square: | **+botkomutları**: Sunucudaki Coğu Komutları Gösterir\n:white_small_square: | **+yetkili**: Yetkili Komutlarını Gösterir!\n:white_small_square: | **+müzikkomutları**: Müzik Komutlarını Gösterir\n:white_small_square: |`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım', 
    description: 'yardım',
    usage: 'yardım'
  };
