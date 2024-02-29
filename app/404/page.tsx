import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600">
          Oops! The page you requested is invalid or the API requests limit has
          been reached.
        </p>
        <a href='/'>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            Go back to home
          </button>
        </a>
      </div>
    </div>
  );
};

export default page;
