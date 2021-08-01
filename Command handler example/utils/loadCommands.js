const path = require('path');
const glob = require('glob');

function loadCommands(cmdDir, client) {
    const items = [];
    items.push(...glob.sync(`${path.join(__dirname, `../${cmdDir}`)}/**/*.js`));
    for (const item of items) {
        if (require.cache[require.resolve(item)]) delete require.cache[require.resolve(item)];
        const command = require(item);
        client.commands.set(command.name, command);
        if (command.aliases) {
            for (const alias of command.aliases) {
                client.aliases.set(alias, command.name);
            }
        }
    }
    console.log('Commands have been loaded successfully!');
};

module.exports = { loadCommands }