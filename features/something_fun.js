module.exports = function(controller) {
  controller.hears('something fun', ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Jen and Olivia first met in 6th grade gym class, but didn't become best friends until sophomore year of high school when they shared their struggles of AP World History together.
        <br><img src="./images/jo2.jpg" alt="young jen and olivia" width="200">`);
      await bot.reply(message, {type: 'typing'});
    }, 1000);
  }

}