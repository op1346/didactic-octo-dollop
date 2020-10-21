const jenData = require("./data/jen");
const {name, email} = jenData.contactInfo;

module.exports = function(controller) {
  controller.hears('contact', 'message,direct_message', async(bot, message) => {
    await bot.reply(message, {type: "typing"});
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `${name}'s email is ${email}`)
    }, 1000)
  })
}
