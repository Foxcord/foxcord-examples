const { Client } = require('foxcord');

const client = new Client({
    device: 'MOBILE',
    intents: ['ALL'],
    reconnect: true
});

client.on('READY', () => {
    client.setGame('powered by Foxcord');
    console.log(client.user.tag + ' is online!');
})

client.on('MESSAGE', (message) => {
    if(message.author.bot) return;
    if(message.content === 'ping') return message.channel.send('🏓 Pong, my ping is ' + client.ping + 'ms!');
})

client.connect('token');