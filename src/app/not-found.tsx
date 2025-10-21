'use client';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">404</h1>
        <p className="text-gray-500">This page could not be found.</p>
      </div>
    </div>
  );
}