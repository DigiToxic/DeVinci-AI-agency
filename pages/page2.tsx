import React from "react";

function page2() {
  return (
    <div className="h-screen flex justify-evenly items-center mt-10 max-[1265px]:h-full max-[1265px]:flex-col" id="Services">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="font-bold text-3xl mb-4">
          AI Enahenced <br />
          Automations
        </p>
        <p className="w-3/4 mb-4 text-lg max-[1265px]:w-5/6 max-[530px]:text-base">
          Strealine your operations with custom automation solutions that reduce
          manual work and errors
        </p>
        <img className="w-[500px] max-[1265px]:w-[450px] max-[530px]:w-[300px]" src="/market.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center text-center max-[1265px]:my-20">
        <p className="font-bold text-3xl mb-4">
          Lead Generation <br />
          Chatbots
        </p>
        <p className="w-3/4 text-lg max-[1265px]:w-5/6 max-[530px]:text-base">
          Never miss out on a potential lead with customized chatbots that
          engage site visitors 24/7
        </p>
        <img className="w-[450px] max-[1265px]:w-[400px] max-[530px]:w-[300px]" src="/connect.png" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <p className="font-bold text-3xl mb-4">
          Custom Service <br />
          Chatbots
        </p>
        <p className="w-3/4 text-lg max-[1265px]:w-5/6 max-[530px]:text-base">
          Improve customer satisfaction and reduce response time with AI-powered
          chat support
        </p>
        <img className="w-[500px] max-[1265px]:w-[450px] max-[530px]:w-[300px]" src="/rating.png" alt="" />
      </div>
    </div>
  );
}

export default page2;
