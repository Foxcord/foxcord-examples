import { DiscordEmbed } from "foxcord"

export default {
    aliases: ['exp'],
    async run(message, args) {

        const embed = new DiscordEmbed()
        .setColor('#eb4034')
        .setTitle('**Exemple Command :**')
        .setDescription('This is an exemple !')
        .setThumbnail(message.author.avatarURL())
        .setFooter('Foxcord');

        message.channel.send(embed);
    }
};
