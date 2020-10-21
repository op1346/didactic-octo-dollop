const jenData = require("./data/jen");
const {name, email, portfolio, linkedIn, github} = jenData.contactInfo;

module.exports = function(controller) {
  controller.hears(['contact', 'email', 'portfolio', 'linkedin', 'github'], 'message,direct_message', async(bot, message) => {
    await bot.reply(message, {type: "typing"});
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `${name}'s contact information:`);
      await bot.reply(message, {type: "typing"});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `email: ${email}`);
      await bot.reply(message, {type: "typing"});
    }, 2000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `<div>Portfolio: <a href="${portfolio}" target="_blank">${portfolio}</a></div>` );
    }, 3000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `<div>LinkedIn: <a href="${linkedIn}" target="_blank">${linkedIn}</a></div>` );
    }, 3500)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `<div>Github: <a href="${github}" target="_blank">${github}</a></div>` );
    }, 4000)
  })
}
