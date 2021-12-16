# WAGUMI Discord bot

## Development

### Configurations

First, you set the env vars using .env file.

#### Required

- DISCORD_BOT_TOKEN: The bot token on your discord server.

#### Optional

You can manage channels which bot can send messages from each environments with these vars. If you would like to set multiple IDs, you can use CSV format.

- DEV_CHANNEL_WHITELIST
- PROD_CHANNEL_WHITELIST

### Start the discord bot

```shell
% yarn install
% yarn dev
```
