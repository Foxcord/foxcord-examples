import { DiscordEmbed } from 'foxcord';

export default {
  dm: true, 
  aliases: ['latence', 'ms'],
  async run(message, args) {
    
    const ping = client.ping;
    
    const embed = new DiscordEmbed()
    .setColor('#eb4034')
    .setTitle('Cool embed')
    .setDescription(`🏓Pong! My ping is ${ping}ms`)
    .setFooter('Foxcord');
    
    message.channel.send(embed);
  };
};
