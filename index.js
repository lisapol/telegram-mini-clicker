import { Telegraf } from 'telegraf';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const botToken = process.env.BOT_TOKEN;

if (!botToken) {
  throw new Error('❌ BOT_TOKEN is not set in environment variables!');
}

// ✅ Define the bot before using it
const bot = new Telegraf(botToken);

// Handle /start command
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

// Launch the bot
bot.launch();

console.log("✅ Bot is running...");
