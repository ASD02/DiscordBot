const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();

 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Dhinka is online!');
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'sook'){
        client.commands.get('sook').execute(message, args);
    } else if(command ==='millie'){
        client.commands.get('millie').execute(message, args);
    } else if(command === 'yash'){
        client.commands.get('yash').execute(message, args);
    } else if(command === 'hyell'){
        client.commands.get('hyell').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }else if(command === 'game'){
        client.commands.get('game').execute(message, args);
    }else if(command === 'mildefrance'){
        client.commands.get('mildefrance').execute(message, args);
    }else if(command === 'melon'){
        client.commands.get('melon').execute(message, args);
    }else if(command === 'milcraft'){
        client.commands.get('milcraft').execute(message, args);
    }else if(command === 'rahul'){
        client.commands.get('rahul').execute(message, args);
    }else if(command === 'nice'){
        client.commands.get('nice').execute(message, args);}
});

client.on('message', async message => {
    if (message.content === '~dhinka') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('audio.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }

    if (message.content === '~aasish') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('Aasish.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }

    if (message.content === '~support') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('Support.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }

    if (message.content === '~akshat') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('akshat.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }

    if (message.content === '~nbosco') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('chick.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }


    if (message.content === '~step') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('step.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }

    if (message.content === '~warframe') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('warframe.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {
                connection.disconnect();
            });
        }
    }

    if (message.content === '~rahuta') {
        // Join the same voice channel of the author of the message
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            const dispatcher = connection.play('rahuta.mp3');

            dispatcher.on('start', () => {
            });

            dispatcher.on('finish', () => {

                connection.disconnect();
            });
        }
    }
});


client.login(''); //enter your discord bot's client id here.
