import { trpc } from '@twinkle/utils/trpc';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  const { data: user } = trpc.getUser.useQuery();

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl">Welcome to the tRPC + NextAuth App</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => signIn('google')}
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl">Hello, {user?.name || 'User'}!</h1>
      <p>Email: {user?.email}</p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
