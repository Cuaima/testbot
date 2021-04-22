let keywords = 'excited';
if (tokens.length > 1){
    keywords = tokens.slice(1, tokens.length).join(" ");
}

// let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENNORKEY}&limit=8`;
let url =`https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENNORKEY}&ContentFilter=low`;
let response = await fetch(url);
let json = await response.json();
// console.log(json);

const index = Math.floor(Math.random() * json.results.length)

msg.channel.send(json.results[index].url);
msg.channel.send("GIF from Tenor: " + keywords);
