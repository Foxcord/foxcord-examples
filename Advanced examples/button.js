const { Client, DiscordButton } = require('foxcord');

const client = new Client({
    device: 'MOBILE',
    intents: ['ALL'],
    reconnect: true
});

client.on('READY', () => {
    client.setGame('powered by Foxcord');
    console.log(client.user.tag + ' is online!');
})

const myCoolButton = new DiscordButton()
    .setID('cool-button')
    .setLabel('Nice label!')
    .setStyle('GREEN')
    .setEmoji('✅');

client.on('MESSAGE', (message) => {
    if(message.author.bot) return;
    if(message.content === 'button') return message.channel.send('Click the button', { button: myCoolButton });
});

client.on('BUTTON_CLICKED', (button) => {
    if(button.customID === 'cool-button') return button.reply('Wow, you clicked the button !');
})

client.connect('token');