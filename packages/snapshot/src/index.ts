import { writeFile } from "fs";

import { Client, Intents } from "discord.js";

import "dotenv/config";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

export const GUILD_ID = "914960638365810748";

client.login(process.env.DISCORD_BOT_TOKEN);

console.log(process.env.DISCORD_BOT_TOKEN);

client.on("ready", () => {
  let membersList: string[] = [];

  let guild = client.guilds.cache.get(GUILD_ID);
  console.log(guild);
  console.log(guild?.members.cache);
  guild?.members.fetch().then(members => {
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
