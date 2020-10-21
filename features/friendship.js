const { Botkit } = require('botkit');

module.exports = function(controller) {

  controller.hears(['friendship', 'both'], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "");
    }, 1000);
  })

}