import React from "react";

function page3() {
  return (
    <div className="h-screen mt-10 max-[1265px]:h-full" id="Benefits">
      <div className="flex justify-center items-center mb-14">
        <div className="border-2 p-4 rounded-lg my-10  max-[700px]:w-3/4">
          <p className="text-2xl font-bold max-[700px]:text-center">
            Benefits of Implementing a Customer Service Chatbot
          </p>
        </div>
      </div>

      <div className=" flex justify-evenly items-center max-[1265px]:flex-col">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-3xl mb-4">24/7 Availability</p>
          <p className="w-5/6 text-lg -mb-2 max-[1265px]:w-5/6 max-[530px]:text-base">
            A chatbot can provide instant support to customers at any time,
            without requiring human intervention.
          </p>
          <img className="w-[500px] max-[1265px]:w-[450px] max-[530px]:w-[300px]" src="/chair.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center max-[1265px]:my-20">
          <p className="font-bold text-3xl mb-4">Cost Savings</p>
          <p className="w-5/6 text-lg mb-10 max-[1265px]:w-5/6 max-[530px]:text-base">
            Implementing a chatbot can save costs on hiring and training
            additional customer service agents.
          </p>
          <img className="w-[450px] max-[1265px]:w-[400px] max-[530px]:w-[300px]" src="/lamp.png" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-3xl mb-4">Reduced Response Time</p>
          <p className="w-5/6 text-lg -mb-8 z-10 max-[1265px]:w-5/6 max-[530px]:text-base">
            Chatbots can respond to multiple customers simultaneously, improving
            response time and customer satisfaction.
          </p>
          <img className="w-[500px] max-[1265px]:w-[450px] max-[530px]:w-[300px] max-[530px]:mt-8 max-[530px]:-mb-10" src="/draw.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default page3;
