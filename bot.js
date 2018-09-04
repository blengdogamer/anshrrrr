const Discord = require("discord.js");
const Client = new Discord.Client();


console.log("Welcome Again  by Fox!");


Client.on("guildMemberRemove", member => {
  member.send(`***
*:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..
:fish_cake:  https://discord.gg/PZFePF
يعلن سيرفرنا عن قيام مسابقه والشروط جد سهله و مضمونه 
الجوائز :
المركز الاول:  400$ + 500.000 كريديت
المركز الثاني:  200$ + 240.000 كريديت
المركز الثالت:  100$ + 100.000 كريديت
@here 
و 1000 حساب فل اكسسس اتمنه دخلون بس نوصل 1000 عضو نعلن عن الفاىز
الشروط ترسل صوره ل حسام
و تنشر السيرفو بكل مكان .
طريقه تخليك تفوز :
تقل لاخوانك يصوتولك عرقمك بالمسابقه
حض موفق للجميع
https://discord.gg/PZFePF
[${member}]**`);

  });
 

  Client.on('guildMemberAdd', member => {
  member.send(`***:
*:small_blue_diamond: - السلام عليكم ورحمة الله وبركاته ..
:fish_cake:  https://discord.gg/PZFePF
يعلن سيرفرنا عن قيام مسابقه والشروط جد سهله و مضمونه .
الجوائز :
المركز الاول:  400$ + 500.000 كريديت
المركز الثاني:  200$ + 240.000 كريديت
المركز الثالت:  100$ + 100.000 كريديت
@here 
و 1000 حساب فل اكسسس اتمنه دخلون بس نوصل 1000 عضو نعلن عن الفاىز
الشروط ترسل صوره ل حسام
و تنشر السيرفو بكل مكان .
طريقه تخليك تفوز :
تقل لاخوانك يصوتولك عرقمك بالمسابقه
حض موفق للجميع
https://discord.gg/PZFePF
[${member}]**`);


  });



Client.login("BOT_TOKEN");
