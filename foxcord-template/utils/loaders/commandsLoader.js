import handle from "./handle.js";

export default async function(client) {
    await handle('commands', async path => {
        const commandName = path.split('.js').shift().split('/').pop(),
        commandCode = await import(path);
        client.commands.set(commandName, commandCode.default);
    });
};