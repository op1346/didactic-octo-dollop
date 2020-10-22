const data = require("./data/data");
const {jen, olivia} = data;

module.exports = function(controller) {

  controller.hears(["olivia", "jen"], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    let person;
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }

    const description = person === "Jen" ? jen.description : olivia.description;

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `${description}`);
      await bot.reply(message, {type: 'typing'});
    }, 1000)
    
    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `What else would you like to know about ${person}?`,
        quick_replies: [
          {
            title: `${person}'s Education`,
            payload: `${person}'s Education`
          },
          {
            title: `${person}'s Job History`,
            payload: `${person}'s Job History`
          },
          {
            title: `${person}'s Projects`,
            payload: `${person}'s Projects`
          },
          {
            title: `${person}'s Contact`,
            payload: `${person}'s Contact`
          }
        ]
      });

    }, 2500);
  });

}