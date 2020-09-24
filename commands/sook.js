module.exports = {
    name: 'sook',
    description: "send pic of sook",
    execute(message, args){
        message.channel.send({files:["sook.jpg"]});
    
}}