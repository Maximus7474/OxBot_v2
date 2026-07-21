import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { logger } from '@/utils/logger';
import type { BotClient } from '@/client';
import type { Command } from '@/types';

export const loadCommands = async (client: BotClient): Promise<void> => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const dir = join(currentDir, '..', 'commands');
  const files = readdirSync(dir).filter((f) => f.endsWith('.ts'));

  for (const file of files) {
    const filePath = join(dir, file);
    try {
      const mod = await import(pathToFileURL(filePath).href);
      const command: Command = mod.default;

      if (!command?.data || !command?.execute) {
        logger.debug(`[Commands] 🚧 Skipping ${file} - missing data or execute function`);
        continue;
      }

      if (client.commands.has(command.data.name)) {
        logger.warn(`[Commands] 🤥 Duplicate command name: ${command.data.name} (${file})`);
        continue;
      }

      client.commands.set(command.data.name, command);
      logger.info(`[Commands] ✅ Loaded: ${command.data.name}`);
    } catch (error) {
      logger.error(`[Commands] ❌ Error loading ${file}: ${error}`);
    }
  }
  logger.info(`[Commands] 📝 Total commands loaded: ${client.commands.size}`);
};
