const data = require("./data/data");

module.exports = function(controller) {
  controller.hears(["jen's job history", "olivia's job history"], "message", async(bot, message) => {
    let person;
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }

    const {jobHistory} = person === "Jen" ? data.jen : data.olivia;

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Here is a list of ${person}'s job history:`);
      await bot.reply(message, {type: 'typing'});
    }, 1000);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {text: `${jobHistory.map(job => (
        `<div>
          <strong>${job.companyName}</strong> (${job.startDate} - ${job.endDate})
          <br>
          ${job.location}
          <br>
          ${job.jobTitle}
          <br>
          ${job.jobDescription}
        </div>`
      )).join('')}`});
      await bot.reply(message, {type: 'typing'});
    }, 2000);

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
            title:`${person}'s Projects`,
            payload: `${person}'s Projects`
          },
          {
            title: `${person}'s Contact`,
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