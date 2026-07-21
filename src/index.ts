import { env } from '@/env';

const packageManager: string = 'NubJS';

console.log(`Hello via ${packageManager}!`);
console.log(`NODE_ENV: ${env.NODE_ENV}`);
