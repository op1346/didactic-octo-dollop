const data = require("./data/data");

module.exports = function(controller) {
  controller.hears(["jen's projects", "olivia's projects"], "message", async(bot, message) => {
    let person;
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }
    
    const {projects} = person === "Jen" ? data.jen : data.olivia;

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Here is a list of ${person}'s projects:`);
      await bot.reply(message, {type: 'typing'});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {text: `${projects.map(project=> (
        `<div>
        <strong>${project.name}</strong>
        <br>
        <img src=${project.img} width="300" height="200">
        <br>
        <i>${project.technologies.join(', ')}</i>
        <br>
        ${project.description}
        <br>
        Check out the live site <a href="${project.url} target="_blank">here</a>!
        </div>`
      ))}`});
      await bot.reply(message, {type: 'typing'});
    }, 2500)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text:`Would you like to see a full list of ${person}'s technology experience?`,
        quick_replies: [
          {
            title: "yes",
            payload: `${person}'s Technologies`
          },
          {
            title: "I would like to see something else",
            payload: `${person}`
          }
        ]
      });
    }, 3000)

  });
}