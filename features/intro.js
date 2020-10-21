// const { Botkit } = require('botkit');

module.exports = function(controller) {
  // automatically says hi when user enters
  controller.on('welcome_back', async(bot, message) => {
    await bot.reply(message, {type: "typing"});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Hi there!");
      await bot.reply(message, {type: "typing"});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "My name is JO the OJ Bot and I was created by Jen Lu and Olivia Park");
      await bot.reply(message, {type: "typing"});
    }, 2000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Who would you like more information on? You can also learn about both!");
    }, 3000)



  })

}