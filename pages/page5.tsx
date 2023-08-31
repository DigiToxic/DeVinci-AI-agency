import React from "react";

function page5() {
  return (
    <div className="h-full p-10 mt-10" id="Studies">
      <div className="mb-10">
        <p className="font-bold text-2xl mb-4 max-[500px]:text-center">
          Case Studies - Companies Who've Successfully Scaled Using AI
        </p>
        <p className="text-xl">
          AI has been instrumental in the success and growth of many companies.
          Here are a few case studies
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-rows-2 grid-flow-col gap-x-64 max-[900px]:gap-x-32 max-[600px]:grid-rows-4">
          <div className=" flex flex-col justify-center items-center">
            <img className="w-64 max-[850px]:w-44" src="/logo/Uber.png" alt="" />
            <p className="text-center text-lg">
              Uses AI to predict user demand and calculate the optimal route,
              enabling efficient and cost-effective ride-hailing.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img className="w-64 max-[850px]:w-44" src="/logo/Netflix.png" alt="" />
            <p className="text-center text-lg">
              Uses AI algorithms to analyze user preferences and tailor
              suggestions, providing a personalized streaming experience.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img className="w-64 max-[850px]:w-44" src="/logo/green.png" alt="" />
            <p className="text-center text-lg">
              Uses AI to analyze listening habits and provide tailored music
              recommendations, increasing user retention and engagement.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img className="w-64 max-[850px]:w-44" src="/logo/walmart.png" alt="" />
            <p className="text-center text-lg">
              Uses AI to manage inventory, optimize pricing, and predict demand,
              improving accuracy and saving cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page5;
