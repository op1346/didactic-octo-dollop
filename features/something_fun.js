module.exports = function(controller) {
  controller.hears('something fun', ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Jen and Olivia first met in 6th grade gym class, but didn't become best friends until sophomore year of high school when they shared their struggles of AP World History together.`);
    }, 1000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: "Who would you like more information on? Feel free to type in your own responses or click on the buttons below",
        quick_replies: [
          {
            title: 'Jen',
            payload: 'Jen'
          },
          {
            title: 'Olivia',
            payload: 'Olivia'
          },
          {
            title: 'Both',
            payload: 'Both'
          }
        ]
      });
    }, 2500)
  });
}
