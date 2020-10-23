const data = require("./data/data");

module.exports = function(controller) {
  controller.hears(["jen's education", "olivia's education"], 'message', async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    let person;
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }

    const {education} = person === "Jen" ? data.jen : data.olivia;

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `${person} has ${education.length} items listed in education`);
      await bot.reply(message, {type: 'typing'});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `${education.map(school => (
        `<div>
        <strong>${school.institutionName}</strong> (${school.startDate} - ${school.endDate})
          <p><i>${school.degree}</i></p>
        </div><br>`
    )).join('')}`})
    }, 2000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `What else would you like to know about ${person}?`,
        quick_replies: [
          {
            title: `${person}'s Contact`,
            payload: `${person}'s Contact`
          },
          {
            title: `${person}'s Job History`,
            payload: `${person}'s Job History`
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

  });
}