// links to the command files
const gif = require("./commands/gif.js");
const cool = require("./commands/cool.js");

const commands = { cool, gif };

module.exports = async function(msg){

    if (msg.channel.id === process.env.CHANNEL_ID){
        let tokens = msg.content.split(" ");
        let command = tokens.shift();
        if (command.charAt(0) === '!'){
            //valid command
            command = command.substring(1);
            commands[command](msg, tokens);
        }
    }
};