import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { AppRouter } from '@twinkle/server/trpc/router';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    };
  },
});
