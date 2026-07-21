import { env } from '@/env';

const createLogger = () => {
  const isDevelopment = env.NODE_ENV === 'development';

  return {
    debug: (...args: unknown[]) => {
      if (isDevelopment) {
        console.log('[DEBUG]', ...args);
      }
    },
    info: (...args: unknown[]) => {
      console.log('[INFO]', ...args);
    },
    warn: (...args: unknown[]) => {
      console.warn('[WARN]', ...args);
    },
    error: (...args: unknown[]) => {
      console.error('[ERROR]', ...args);
    },
  };
};

export const logger = createLogger();
