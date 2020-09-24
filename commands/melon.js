module.exports = {
    name: 'melon',
    description: "sends melon",
    execute(message, args){
        message.channel.send({files:["melon.jpg"]});
    
}}