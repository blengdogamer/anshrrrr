const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`***
حياكم الله السيرفر الافتتاح قريب
https://discord.gg/BGF6BaR
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`***:
حياكم الله السيرفر الافتتاح قريب
https://discord.gg/BGF6BaR
[${member}]**`);


  });



Client.login("BOT_TOKEN");
