module.exports = {
    name: 'millie',
    description: "send pic of millie",
    execute(message, args){
        message.channel.send({files:["Millie.jpg"]});
    
}}