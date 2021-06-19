const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!activities for activities to cure boredom', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});

client.on('message', message => {
  if (message.content === '!youtube') { // youtube
     if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
    				return message.channel.send(`${invite.code}`);
						});
        };
  } else if(message.content ==='!poker') { //poker
     if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
        };
	} else if(message.content ==='!chess') { //chess
     if(message.member.voice.channel) {
						client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
    				return message.channel.send(`${invite.code}`);

});
        };
	} else if(message.content ==='!betrayal') { //betrayal
		     if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
    				return message.channel.send(`${invite.code}`);
});
        };
	} else if(message.content ==='!fishing') { //fishing
		     if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
   					 return message.channel.send(`${invite.code}`);
});
        };
	} else if(message.content ==='!activities') { //help
	const helpEmbed = {
	color: 0x0099ff,
	title: 'Discord Activities',
	url: 'https://discord.gg/ZqXE8A4zm7',
	description: 'Created by Indigo',
	fields: [
		{
			name: 'YouTube',
			value: '!youtube',
		},
		{
			name: 'Poker',
			value: '!poker',
		},
		{
			name: 'Chess',
			value: '!chess',
		},
		{
			name: 'Betrayal',
			value: '!betrayal',
		},
		{
			name: 'Fishing',
			value: '!fishing',
		},
	],
	timestamp: new Date(),
};

message.channel.send({ embed: helpEmbed });
	}
});

client.login('TOKEN');