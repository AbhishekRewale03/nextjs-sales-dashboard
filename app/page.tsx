"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center space-y-4 border border-gray-200 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Sales Dashboard
        </h1>

        <p className="text-gray-600 text-sm">
          View yearly sales insights and analytics
        </p>

        <button
          onClick={() => router.push("/dashboard")}
          className="mt-4 px-6 py-3  bg-[#0969da] text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </main>
  );
}
