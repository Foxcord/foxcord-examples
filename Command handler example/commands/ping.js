module.exports = {
    name: 'ping', 
    aliases: ['latency'], 
    execute(client, message) {
        message.channel.send(`🏓 Pong! My latency is \`${client.ping}ms\``);
    }
};