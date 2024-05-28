import Link from "next/link";
import Image from "next/image";
import { Navbar2 } from "@/components";
import { ArrowIconBlue } from "@/Icons";

export default function Home() {
  return (
    <section className="flex w-full h-screen landingpagebg">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col justify-center items-end w-full -ml-8">
          <Navbar2 />
        </div>
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full flex flex-col items-end justify-center">
            <h1 className="text-white font-black text-8xl leading-[6.25rem] ">
              Interested in <br /> religious <br /> teaching(s)?
            </h1>
            <p className="text-white text-md w-2/3 mt-5">
              Lorem ipsum dolor sit amet. mollitia quo rerum velit et assumenda
              assumenda qui nemo debitis et suscipit magni.{" "}
            </p>
            <div className="mt-5 flex items-start w-2/3">
              <Link
                href="/getStarted"
                className="text-darkblueui font-bold bg-white px-4 py-2 text-base rounded-full hover:bg-gray-200 flex"
              >
                Get Started
                <ArrowIconBlue />
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="w-full flex items-start mb-16 ml-10">
              <Image
                src="/teacherlanding.png"
                width={212}
                height={600}
                alt="video cam big teacher"
                className=""
              />
              <Image
                src="/studentlanding.png"
                width={212}
                height={600}
                alt="video cam big student"
                className="ml-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
