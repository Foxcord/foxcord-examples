const { Client, Collection } = require('foxcord');

const config = require('./config.json');
const { loadCommands } = require('./utils/loadCommands');

const client = new Client({
    intents: ['ALL'],
    device: 'MOBILE',
    reconnect: true
});

client.commands = new Collection();
client.aliases = new Collection();

loadCommands('commands', client);

client.on('READY', () => {
    client.setGame('powered by Foxcord', { type: 'WATCHING' });
    console.log(`${client.user.tag} is online!`);
})
.on('MESSAGE', message => {
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;
    const cmd = message.content.split(/\s+/g)[0].slice(config.prefix.length);
    const args = message.content.split(/\s+/g).slice(1);
    try {
        let command;
        if (client.commands.has(cmd)) {
            command = client.commands.get(cmd);
        } else if (client.aliases.has(cmd)) {
            command = client.commands.get(client.aliases.get(cmd));
        }
        if (!command) return;
        command.execute(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.connect(config.token);