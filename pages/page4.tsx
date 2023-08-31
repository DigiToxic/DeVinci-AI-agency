import React from "react";

function page4() {
  return (
    <div className="h-screen flex justify-between items-center mt-10 max-[850px]:h-full max-[850px]:flex-col">
      <div className="ml-10 mb-28 max-[850px]:mb-10">
        <p className="font-bold text-5xl mb-16">
          Test Our Chatbots and AI <br />
          automations for Free
        </p>
        <p className="w-5/6 mb-10 text-xl">
          Try our AI chat support technology and see the benefits for yourself.
          We offer a free test run on your brand website.
        </p>
        <p className="mb-10 text-xl">We value our Clients satisfaction!</p>
        <p className="text-xl">Dm us and request a free prototype now!!</p>
      </div>
      <img className="w-[700px] max-[1265px]:w-1/2 max-[850px]:w-[400px]" src="/happy.png" alt="" />
    </div>
  );
}

export default page4;
