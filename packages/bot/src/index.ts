import { writeFile } from "fs";

import { Client } from "discord.js";

import "dotenv/config";

const client = new Client();

export const GUILD_ID = "914960638365810748";

client.login(process.env.DISCORD_BOT_TOKEN);
console.log(process.env.DISCORD_BOT_TOKEN);

client.on("ready", () => {
  let membersList: string[] = [];
  let guild = client.guilds.cache.get(GUILD_ID);

  guild?.members.fetch().then(members => {
    console.log(members);
    return members.forEach(member => {
      membersList.push(member.user.username);
      return console.log(member.user.username);
    });
  });
  writeFile("snapshot.json", JSON.stringify(membersList), err => {
    if (err) {
      return console.error(err);
    }
    console.log("File created!");
  });
});

client.on("message", async message => {
  // When the user sends !ping the bot sends Pong.
  if (message.content === "!ping") {
    // メッセージが送信されたチャンネルへ「Pong.」を送り返す。
    message.channel.send("Pong.");
  }
});
