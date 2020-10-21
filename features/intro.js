const { Botkit } = require('botkit');

module.exports = function(controller) {
  controller.on('hello', async(bot, message) => {
    console.log("WELCOME")
    await intro(bot, message)
    await bot.say('hello!');
  });

}