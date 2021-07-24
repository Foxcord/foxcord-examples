const { Client, DiscordEmbed } = require('foxcord');

const client = new Client({
    device: 'MOBILE',
    intents: ['ALL'],
    reconnect: true
});

client.on('READY', () => {
    client.setGame('powered by Foxcord');
    console.log(client.user.tag + ' is online!');
})

const myCoolEmbed = new DiscordEmbed()
    .setColor('#eb4034')
    .setTitle('Cool embed')
    .setDescription('Wow this is the description')
    .setFooter('Foxcord')

client.on('MESSAGE', (message) => {
    if(message.author.bot) return;
    if(message.content === 'embed') return message.channel.send(myCoolEmbed);
})

client.connect('token');