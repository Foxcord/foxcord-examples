import { PREFIX } from "../../utils/config.js";

export default async function(client, message) {
    //@exemple: ban @Lucifer is mean $
    //<commandName> [args] (prefix)
    if(message.author.bot) return;
    if(!message.content.endsWith(PREFIX)) return;
    message.content.split(PREFIX).pop();
    const args = message.content.split(/ /);
    const commandName = args.shift();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases.includes(commandName));

    if(!command) return;
    args.shift();

    command.run(message, args);
}
