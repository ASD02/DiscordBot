module.exports = {
    name: 'hyell',
    description: "send pic of hyell no",
    execute(message, args){
        message.channel.send({files:["Hyell.jpg"]});
    
}}