const { Botkit } = require('botkit');

module.exports = function(controller) {
  controller.hears('education', 'message', async(bot, message) => {
    await bot.reply(message, {type: 'typing'});
    await bot.reply(message, ``);
  });
}