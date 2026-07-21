import { createClient } from '@/client';
import { loadCommands } from '@/handlers/commands';
import { loadEvents } from '@/handlers/events';

const client = createClient();

await loadCommands(client);
await loadEvents(client);
