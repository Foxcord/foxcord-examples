const { Client, SlashCommandBuilder, SlashCommandsManager } = require('foxcord');

const client = new Client();

const slashCommandsManager = new SlashCommandsManager('CLIENT_ID', 'CLIENT_TOKEN');

const coolSlashCommand = new SlashCommandBuilder()
    .setName('cool-command')
    .setDescription('My cool command description');

slashCommandsManager.pushCommand(coolSlashCommand, {
    guildID: 'GUILD_ID' // Optional
});

client.on('SLASH_COMMAND_USED', (slashCommand) => {
    slashCommand.reply(slashCommand.member.tag + ' used ' + slashCommand.name, {
        ephemeral: false // Optional, false by default
    });
});

client.connect('TOKEN');
