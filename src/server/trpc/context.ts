import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { prisma } from '@twinkle/utils/prisma';

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  return { req, res, prisma };
};

export type Context = ReturnType<typeof createContext>;
