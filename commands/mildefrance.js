module.exports = {
    name: 'mildefrance',
    description: "sends mildefrance",
    execute(message, args){
        message.channel.send({files:["mildefrance.jpg"]});
    
}}