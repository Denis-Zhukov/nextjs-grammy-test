import {Bot} from "grammy";

export const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN!);

bot.command("start", (ctx) => ctx.reply("Привет! Я бот на grammY в Next.js!"));
bot.on("message", (ctx) => ctx.reply('7703501501:AAFFjq1u04eJMUmoo58Uy2SmNcFpn4N5KVs'));
