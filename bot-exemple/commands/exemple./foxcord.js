import { DiscordEmbed } from 'foxcord';

export default {
  //Define Parameters
  
  args: false, //If the command needs arguments
  dm: true, //If the command can be run in dm
  admin: false, //If the author need admin perms
  async run(message, args) {
    const embed = new DiscordEmbed()
    .setColor('#eb4034')
    .setTitle('PRESENTATION')
    .setDescription("I'm a super discord bots lib who hopes overcome Discord.js !!!")
    .setFooter('Foxcord');
    message.channel.send(embed);
  }
};
