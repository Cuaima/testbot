//replies to the user
const replies = [
    'awesome!',
    'very cool 👍',
    'cool cool cool',
    'yeah!!!',
    'yeah yeah, nerd',
]

module.exports = function (msg, args) {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
};