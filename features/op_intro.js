module.exports = function(controller) {

  controller.hears(["olivia"], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `What would you like to know about Olivia?`,
        quick_replies: [
          {
            title: "OP's Education",
            payload: "Olivia's Education"
          },
          {
            title: "OP's Contact",
            payload: "Olivia's Contact"
          },
          {
            title: "OP's Job History",
            payload: "Olivia's Job History"
          },
          {
            title: 'Something Fun',
            payload: 'Something Fun'
          }
        ]
      });

    }, 1000);
  });

}