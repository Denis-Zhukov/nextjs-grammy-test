import {Bot, webhookCallback} from 'grammy'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const token = process.env.API_TOKEN

if (!token) throw new Error('TELEGRAM_BOT_TOKEN environment variable not found.')

const bot = new Bot(token);
bot.on('message:text', async (ctx) => {
    await ctx.reply(ctx.message.text)
})

export const POST = webhookCallback(bot, 'std/http')

//curl https://api.telegram.org/bot7703501501:AAFFjq1u04eJMUmoo58Uy2SmNcFpn4N5KVs/setWebhook?url=http://localhost:3000/api/bot