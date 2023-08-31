import TypingEffect from "./components/TypingEffect";
import Header from "./components/Header";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Footer from "./components/Footer";

export default function Home() {
  const words = ["AI.", "AI Chatbots.", "Automations."];

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-6xl font-bold mb-1">DEVINCI</p>
        <p className="text-4xl font-bold text-center w-[90%]">
          <span className="gradient-text">Create </span> automated solutions
          powered by {""} <br className="hidden max-[825px]:block"/>
          <TypingEffect words={words} />
        </p>
      </div>

      <div className="flex justify-center items-center mt-20">
        <p className="font-bold text-center text-2xl w-[90%] max-[530px]:text-xl">
          Our mission is to revolutionize the way companies <br /> operate,
          enhancing efficiency, accuracy and profitability.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <img className="w-96" src="/rocket.png" alt="" />
      </div>

      <div className="flex justify-center">
        <div className="w-1/2 border-t-4 mt-20 mb-10 border-[#ff4d0043]" />
      </div>
      <Page2 />

      <div className="flex justify-center">
        <div className="w-1/2 border-t-4 my-20 border-[#ff4d0043]" />
      </div>
      <Page3 />

      <div className="flex justify-center">
        <div className="w-1/2 border-t-4 mt-32 mb-20 border-[#ff4d0043]" />
      </div>
      <Page4 />

      <div className="flex justify-center">
        <div className="w-1/2 border-t-4 my-20 border-[#ff4d0043] max-[1000px]:mt-0" />
      </div>
      <Page5 />

      <div className="flex justify-center">
        <div className="w-1/2 border-t-4 mt-32 border-[#ff4d0043]" />
      </div>
      <Page6 />
      <Footer />
    </div>
  );
}
