const data = require("./data/data");
const {fun} = data;

module.exports = function(controller) {
  controller.hears(['something fun', 'random', 'fun'], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    const funFact = fun[Math.floor(Math.random() * fun.length)];

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `${funFact.description}<br>${funFact.img ? `<img src=${funFact.img} alt=${funFact.alt} width="300px">` : null}`);
    }, 1000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: "Who would you like more information on?",
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
