import { initTRPC } from '@trpc/server';
import { Context } from './context';

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUser: t.procedure.query(async ({ ctx }) => {
    const user = await (await ctx).prisma.user.findFirst();
    return user;
  }),
});

export type AppRouter = typeof appRouter;
