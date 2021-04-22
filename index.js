//fetches Discord.js
const Discord = require('discord.js');
const client = new Discord.Client();
//fetches the dotenv library (to offuscate tokens)
require('dotenv').config()
//login
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);
// show that the bot is working on the console
function readyDiscord() {
    console.log('The claw test bot is ready!')
}

const commandHandler = require("./commands");

client.on('message', commandHandler);
