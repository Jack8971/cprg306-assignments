"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {!user ? (
          <>
            <h1 className="text-3xl font-bold">Welcome to the Shopping List App</h1>
            <p className="text-lg">Please log in to continue.</p>
            <button
              onClick={gitHubSignIn}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Login with GitHub
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-semibold">Welcome, {user.displayName}</h1>
            <p className="text-sm text-gray-300">Email: {user.email}</p>
            <button
              onClick={firebaseSignOut}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Logout
            </button>
            <a
              href="/week-10/shopping-list"
              className="block mt-4 text-blue-400 hover:underline"
            >
              Go to Shopping List
            </a>
          </>
        )}
      </div>
    </main>
  );
}
