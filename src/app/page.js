"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {session ? (
        <div>
          <p>Welcome, {session.user?.name}!</p>
          <img src={session.user?.image || ""} alt="Profile" className="w-16 h-16 rounded-full" />
          <button onClick={() => signOut()} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn("google")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login with Google
        </button>
      )}
    </div>
  );
}
