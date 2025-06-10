import { Telegraf } from 'telegraf';

const botToken = process.env.BOT_TOKEN;
if (!botToken) throw new Error('❌ BOT_TOKEN is not set!');

const bot = new Telegraf(botToken);

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
console.log("✅ Bot is running...");
