const data = require("./data/data");

module.exports = function(controller) {

  controller.hears(['friendship', 'both'], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});
    
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Jen and Olivia first met in 6th grade gym class, but didn't become best friends until sophomore year of high school when they shared their struggles of AP World History together
        <br><img src="./images/jo2.jpg" alt="young jen and olivia" width="200">`);
      await bot.reply(message, {type: 'typing'});
    }, 1000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Although not always close physically (Jen is in Virginia and Olivia is in Korea!), their friendship has survived through the years and they are always supporting each other to be the best software engineers they can be.");
      await bot.reply(message, {type: 'typing'});
    }, 2000);
  })

}