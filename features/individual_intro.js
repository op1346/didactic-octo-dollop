const jenData = require('./data/jen');
const { firstName } = jenData.firstName;

module.exports = function(controller) {

  controller.hears(["jen", "olivia"], ['message', 'direct_message'], async(bot, message) => {
    await bot.reply(message, {type: 'typing'});

    setTimeout(async () => {
      await bot.changeContext(message.reference);
      await bot.reply(message, {
        text: `What would you like to know about ${firstName}?`,
        quick_replies: [
          {
            title: 'Education',
            payload: 'Education'
          },
          {
            title: 'Contact',
            payload: 'Contact'
          },
          {
            title: 'Job History',
            payload: 'Job History'
          },
          {
            title: 'Something Fun',
            payload: 'Something Fun'
          }
        ]
      });

    }, 1000);
  });

}