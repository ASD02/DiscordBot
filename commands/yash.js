module.exports = {
    name: 'yash',
    description: "send pic of yash",
    execute(message, args){
        var items = new Array({files:["yash.jpg"]},{files:["yash1.jpg"]},{files:["yash2.jpg"]},{files:["yash3.jpg"]},{files:["yash4.jpg"]},{files:["yash5.jpg"]},{files:["yash6.jpg"]},{files:["yash7.jpg"]},{files:["yash8.jpg"]});
        var item = items[Math.floor(Math.random() * items.length)];
        message.channel.send(item);
    
}}