const data = require("./data/data");

module.exports = function(controller) {
  controller.hears(["jen's contact", "olivia's contact"], "message", async(bot, message) => {
    let person;
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }

    const {contactInfo} = person === "Jen" ? data.jen : data.olivia;

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Here is ${person}'s contact information:`);
      await bot.reply(message, {type: 'typing'});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message,{text:
        `<div>
        <strong>Full Name: </strong> ${contactInfo.name}
        <br>
        <strong>Email: </strong> ${contactInfo.email}
        <br>
        <br>
        <strong>Links To:</strong>
        <br>
        <a href="${contactInfo.portfolio}" target="_blank">Portfolio</a>
        <br>
        <a href="${contactInfo.linkedIn}" target="_blank">LinkedIn</a>
        <br>
        <a href="${contactInfo.github}" target="_blank">Github</a>
        </div>`});
      await bot.reply(message, {type: 'typing'});
    }, 2000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `What else would you like to know about ${person}?`,
        quick_replies: [
          {
            title: `${person}'s Job History`,
            payload: `${person}'s Contact`
          },
          {
            title: `${person}'s Education`,
            payload: `${person}'s Education`
          },
          {
            title:`${person}'s Projects`,
            payload: `${person}'s Projects`
          },
          {
            title: 'Something Fun',
            payload: 'Something Fun'
          }
        ]
      });
    }, 3000)
  })
}