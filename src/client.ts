import { Client, Collection, GatewayIntentBits } from 'discord.js';
import type { Command } from '@/types';

export class BotClient extends Client {
  commands = new Collection<string, Command>();
}

export function createClient(): BotClient {
  return new BotClient({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildModeration,
      GatewayIntentBits.MessageContent,
    ],
  });
}
