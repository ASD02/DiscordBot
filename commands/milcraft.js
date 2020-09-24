module.exports = {
    name: 'milcraft',
    description: "sends milcraft",
    execute(message, args){
        message.channel.send({files:["milcraft.jpg"]});
    
}}