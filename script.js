const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const prefix = '!';



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot || !message.content.startsWith(prefix)) {
    return; // Ignore messages from bots and messages without the prefix
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'command') {
    const embed = new MessageEmbed()
      .setColor('#0a19f2')
      .setTitle('Title')
      .setDescription('description')

    message.channel.send({ embeds: [embed] });
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('mytoken');

//If you'd like the script add-on to run this script using Uptime Robot, please DM me on Discord, user crimmycrim_ and I'll 
//provide you with what is needed.  
