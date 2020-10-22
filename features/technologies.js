const data = require("./data/data");

module.exports = function(controller) {
  controller.hears(["jen's technologies", "olivia's technologies"], "message", async(bot, message) => {
    let person;
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }
    
    const {technologies} = person === "Jen" ? data.jen : data.olivia;

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Here is a list of ${person}'s technology experience:`);
      await bot.reply(message, {type: 'typing'});
    }, 1000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {text:`${technologies.map(tech => (
        `<ul>
        <li><strong>${tech.name}:</strong> ${tech.years} year(s)</li>
        </ul>`
      )).join('')}`});
      await bot.reply(message, {type: 'typing'});
    }, 2000);

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
            title:`${person}'s Contact`,
            payload: `${person}'s Contact`
          },
          {
            title: 'Something Fun',
            payload: 'Something Fun'
          }
        ]
      });
    }, 3000);

  });

}