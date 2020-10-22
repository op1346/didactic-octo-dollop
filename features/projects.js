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
    const projectList = [...projects.map(project => ({
      title: project.name,
      payload: project.name
    }))]

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, `Here is a list of ${person}'s projects:`);
      await bot.reply(message, {type: 'typing'});
    }, 1000)

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `<div><Strong>Projects</Strong></div>${projects.map(project => `<div>- ${project.name}</div>`).join('')}`
      });
    }, 1500);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `Which one would you like to see?`,
        quick_replies: projectList
      });
    }, 2000);

    controller.hears(`${project.name}`, "message", async(bot, message) => {
      await bot.reply(message, {type: "typing"});

      setTimeout(async () => {
        await bot.changeContext(message.reference);
        await bot.reply(message, {
          text:
            `<div>
            <Strong>${project.name}</Strong>
            <br>
            <img src=${project.img} width "300" height="200">
            <br>
            <i>${project.technologies.join(', ')}</i>
            <br>
            ${project.description}
            <br>
            Check out the live site <a href="${project.url}" target="_blank">here</a>!
            </div>`
        });
        await bot.reply(message, {type: 'typing'});
        }, 2500);
    });

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