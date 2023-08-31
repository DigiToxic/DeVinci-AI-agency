import React from "react";

function page6() {
  return (
    <div className="h-full mt-10">

      <div className="flex flex-col justify-center items-center" id="Try">
        <img className="w-[900px] max-[700px]:w-[600px]" src="/DeVinciAI.png" alt="" />
        <div className="border-2 border-[#ff4d00] rounded-full mt-4 cursor-pointer shadow-md shadow-[#ff4d00] hover:translate-y-2 hover:shadow-none">
          <p className="text-[#ff4d00] font-bold text-3xl rounded-full p-2 hover:text-white hover:bg-[#ff4d00] active:bg-[#8c2a00] max-[500px]:text-2xl">TRY IT FOR FREE NOW!</p>
        </div>
      </div>
    </div>
  );
}

export default page6;
