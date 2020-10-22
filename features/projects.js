const data = require("./data/data");

module.exports = function(controller) {
  let person;
  controller.hears(["jen's projects", "olivia's projects"], "message", async(bot, message) => {
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
      await bot.reply(message, {text: 
        `<strong>Projects:</strong>
        <br>
        <ul>
          ${projects.map(project => (
            `<li>${project.name}</li>`
          )).join('')}
        </ul>`});
    }, 1500);

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `Which one would you like to see?`,
        quick_replies: [
          ...projectList,
          {
            title: "I'd like to see something else",
            payload: "something else"
          }
        ]
      });
    }, 2000);

  });
  
  const allProjects = [...data.jen.projects,...data.olivia.projects]
  const projectNames = [];
  allProjects.forEach(project => projectNames.push(project.name));

  controller.hears([...projectNames], "message", async(bot, message) => {
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }

    const {projects} = person === "Jen" ? data.jen : data.olivia;
    const project = projects.filter(project => project.name === message.text)
    await bot.reply(message, {type: "typing"});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text:
          `<div>
          <Strong>${project[0].name}</Strong>
          <br>
          <img src=${project[0].img} width "300" height="200">
          <br>
          <i>${project[0].technologies.join(', ')}</i>
          <br>
          ${project[0].description}
          <br>
          Check out the live site <a href="${project[0].url}" target="_blank">here</a>!
          </div>`,
          quick_replies: [
            {
              title: "Back to all projects",
              payload: `${person}'s Projects`
            },
            {
              title: "I would like to see something else",
              payload: `${person}`
            },
          ]
      });
    }, 1500)
  });

  controller.hears("something else", "message", async(bot, message) => {
    if (message.text.toLowerCase().includes("olivia")){
      person = "Olivia";
    } else if (message.text.toLowerCase().includes("jen")){
      person = "Jen";
    }

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `Would you like to see a full list of ${person}'s technology experience?`,
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
      }, 1000);

    })
  });
}