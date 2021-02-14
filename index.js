const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);
// show that the bot is working on the console
function readyDiscord() {
    console.log('The claw test bot is ready!')
}

const replies = [
    'awesome!',
    'very cool 👍',
    'cool cool cool',
    'yeah!!!',
]

client.on('message', gotMessage);

function gotMessage(msg){
    if (msg.channel.id == '701186033009557584' && msg.content === 'cool') {
        // msg.reply('cool cool cool'); //treplies to a user with a mention
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }
}
