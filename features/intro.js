const data = require("./data/data");
const {jen, olivia} = data;

module.exports = function(controller) {
  // automatically says hi when user enters
  controller.on('welcome_back', async(bot, message) => {
    await bot.reply(message, {type: "typing"});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Hi there!");
      await bot.reply(message, {type: "typing"});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `My name is JO the OJ Bot and I was created by <strong>Jen Lu</strong> and <strong>Olivia Park</strong>`);
      await bot.reply(message, {type: "typing"});
    }, 2000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `<img src="./images/jo1.jpg" alt="jen and olivia" width="200">`);
      await bot.reply(message, {type: "typing"});
    }, 3000)

    let jobText;
    if (jen.jobSearch && olivia.jobSearch) {
      jobText = "Jen and Olivia are both open to job opportunies at the moment!";
    } else if (jen.jobSearch) {
      jobText = "Jen is open to job opportunities at the moment!";
    } else if (olivia.jobSearch) {
      jobText = "Olivia is open to job opportunities at the moment!";
    }

    let relocationText;
    if (jen.willRelocate && olivia.willRelocate) {
      relocationText = "They are also both open to relocating for the right company.";
    } else if (jen.willRelocate) {
      relocationText = "Jen is open to relocating for the right company.";
    } else if (olivia.willRelocate) {
      relocationText = "Olivia is open to relocating for the right company.";
    }

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `${jobText} ${relocationText}`);
      await bot.reply(message, {type: "typing"});
    }, 5000)

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
    }, 7000)

  })

}