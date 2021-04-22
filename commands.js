module.exports = async function(msg){
    //fetches Discord.js
    const fetch = require('node-fetch');
    // logs the content of messages
    console.log(msg.content);

    const gif = require("./commands/gif.js");
    const cool = require("./commands/cool.js");

    //replies to the user
    const replies = [
        'awesome!',
        'very cool 👍',
        'cool cool cool',
        'yeah!!!',
        'yeah yeah, nerd',
    ]

    if (msg.channel.id === process.env.CHANNEL_ID){

        let tokens = msg.content.split(" ");

        if (/*msg.content*/ tokens[0] === '!cool') {
            // msg.reply('cool cool cool'); //treplies to a user with a mention
            // const index = Math.floor(Math.random() * replies.length);
            // msg.channel.send(replies[index]);
        } else if (tokens[0] === '!gif'){
            // msg.channel.send('gif!');

        //     let keywords = 'excited';
        //     if (tokens.length > 1){
        //         keywords = tokens.slice(1, tokens.length).join(" ");
        //     }

        //     // let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENNORKEY}&limit=8`;
        //     let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENNORKEY}&ContentFilter=low`;
        //     let response = await fetch(url);
        //     let json = await response.json();
        //     // console.log(json);

        //     const index = Math.floor(Math.random() * json.results.length)

        //     msg.channel.send(json.results[index].url);
        //     msg.channel.send("GIF from Tenor: " + keywords);

        }

    
        // if (msg.content === 'hi') {
        //     msg.channel.send('https://gph.is/g/EvWXbx7');
        // }
    }
    /* this doesn't get read
    this doesn't get read either */
}