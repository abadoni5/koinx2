import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Choose a cryptocurrency:</h1>
      <div className="space-y-4">
        <a
          href="/ethereum"
          className="text-blue-500 hover:text-blue-700 block py-2 px-4 rounded-md border border-blue-500 hover:border-blue-700"
        >
          Ethereum
        </a>
        <a
          href="/bitcoin"
          className="text-orange-500 hover:text-orange-700 block py-2 px-4 rounded-md border border-orange-500 hover:border-orange-700"
        >
          Bitcoin
        </a>
        <a
          href="/litecoin"
          className="text-gray-500 hover:text-gray-700 block py-2 px-4 rounded-md border border-gray-500 hover:border-gray-700"
        >
          Litecoin
        </a>
      </div>
    </div>
  );
};

export default Page;
