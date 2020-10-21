const opData = require('./data/olivia');
const { email, portfolio, linkedIn } = opData.contactInfo;

module.exports = function(controller) {
  controller.hears(["olivia's contact"], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { text: `Email: <Strong>${email}</Strong>` });
      await bot.reply(message, { type: 'typing' });
    }, 2000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { text: `LinkedIn: <Strong>${linkedIn}</Strong>` });
      await bot.reply(message, { type: 'typing' });
    }, 3000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, { text: `Portfolio: <Strong><a href='${portfolio}' target='_blank'>${portfolio}</a></Strong>` });
      await bot.reply(message, { type: 'typing' });
    }, 4000);
  });
}