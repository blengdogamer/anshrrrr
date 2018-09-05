nyconst Discord = require('discord.js');
const A7MD = new Discord.Client();

 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
حياكم الله السيرفر 
نستناكم بل افتتاج

                               [  ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
});
client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' h ','i | u','l ','f','t'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/D.JPEI`);
    }, ms);

});

A7MD.login('BOT_TOKEN');
