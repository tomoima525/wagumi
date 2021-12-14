import { Client } from "discord.js";

import "dotenv/config";

const client = new Client();

export const GUILD_ID = "914960638365810748";

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async message => {
  // development-test channel
  if (message.channel.id == "920167819360993330") {
    if (message.content === "!ping") {
      message.channel.send("Pong.");
    }
  }
});
