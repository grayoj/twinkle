import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createContext } from '@twinkle/server/trpc/context';
import { appRouter } from './router';

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
