const { Telegraf } = require('telegraf');
const botToken = process.env.BOT_TOKEN;

bot.start((ctx) => {
  ctx.reply("Click below to open the Mini App 👇", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "Open Counter",
          web_app: {
            url: "https://telegram-mini-clicker.vercel.app"
          }
        }
      ]]
    }
  });
});

bot.launch();
