const data = require("./data/data");
const {jen, olivia} = data;

module.exports = function(controller) {
  // automatically says welcome message when user enters
  controller.on("hello", async(bot, message) => {
    await welcomeMessage(bot, message);
  });

  controller.on("welcome_back", async(bot, message) => {
    await welcomeMessage(bot, message);
  });

  const welcomeMessage = async(bot, message) => {
    await bot.reply(message, {type: "typing"});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Hi there!");
      await bot.reply(message, {type: "typing"});
    }, 2500)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `My name is JO the OJ Bot and I was created by <strong>Jen Lu</strong> and <strong>Olivia Park</strong>`);
      await bot.reply(message, {type: "typing"});
    }, 3500)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `<img src="./images/jo1.jpg" alt="jen and olivia" width="200">`);
      await bot.reply(message, {type: "typing"});
    }, 5000)

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
    }, 6000)

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
    }, 8000)

  }

  controller.hears(["hey", "hello", "what's up", "help"], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: "typing"});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "Hello! My name is JO");
      await bot.reply(message, {type: "typing"});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, "I am here to help you learn about my creators, Jen and Olivia");
      await bot.reply(message, {type: "typing"});
    }, 3000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: "You can type your own response in the chatbox or click on the buttons below",
        quick_replies: [
          {
            title: "Learn about Jen",
            payload: "Jen"
          },
          {
            title: "Learn about Olivia",
            payload: "Olivia"
          },
          {
            title: "Something Fun!",
            payload: "Something Fun"
          },
        ]
      });
    }, 4000)

  })

  controller.on("message, direct_message", async(bot, message) => {
    await bot.reply(message, {type: "typing"});
    
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: "Sorry, I am still learning and don't understand what you just typed. Please try again or select one of the options below",
        quick_replies: [
          {
            title: "Learn about Jen",
            payload: "Jen"
          },
          {
            title: "Learn about Olivia",
            payload: "Olivia"
          },
          {
            title: "Something Fun!",
            payload: "Something Fun"
          },
        ]
      })
    }, 1500)
  })  

}