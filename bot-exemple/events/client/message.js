import { PREFIX } from '../../../utils/config.js';

export default async function(message) {  
  
  if(message.author.bot) return;
  if(!message.content.endsWith(PREFIX)) return; //Exemple: ban @Lucifer is mean $
  
  const args = message.content.split(PREFIX)[0].split(' ');
  const cmdName = args.shift().toLowerCase();
  const cmd = message.client.commands.get(cmdName) || message.client.commands.find(cmd => cmd.aliases.includes(cmdName));
  
  if(!cmd) return;
  if(cmd.args && !args[0]) return;
  if(!cmd.dm && message.channel.type === 'dm') return;
  if(cmd.admin && !message.member.permissions.has('ADMINISTRATOR')) return;
  
 cmd.run(message, args);
};
