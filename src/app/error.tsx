"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-xl text-gray-800 mb-8">
        Something went wrong! Please try again later.
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;