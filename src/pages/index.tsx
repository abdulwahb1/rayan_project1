import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex w-full h-screen landingpagebg">
      <div className="flex flex-col w-full h-full">
        <div className="w-full flex justify-end items-center mt-5 -ml-5">
          <Link href="/">
            <span className="text-white hover:text-darkblueui">
              Our Mission
            </span>
          </Link>
          <Link href="/">
            <span className="text-white ml-8 hover:text-darkblueui">
              Pricing
            </span>
          </Link>
          <Link href="/">
            <span className="text-white ml-8 hover:text-darkblueui">
              Contact
            </span>
          </Link>
          <button className="text-darkblueui font-bold bg-white px-4 py-1 text-base rounded-full ml-8 hover:bg-gray-200">
            Sign In
          </button>
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
              <button className="text-darkblueui font-bold bg-white px-4 py-2 text-base rounded-full hover:bg-gray-200 flex">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className="ml-1.5 mt-0.5"
                >
                  <path
                    d="M11.6669 19.3333C11.2002 19.3333 10.8891 19.1778 10.578 18.8666C9.95577 18.2444 9.95577 17.3111 10.578 16.6889L18.3558 8.91111C18.978 8.28889 19.9113 8.28889 20.5335 8.91111C21.1558 9.53333 21.1558 10.4667 20.5335 11.0889L12.7558 18.8666C12.4447 19.1778 12.1335 19.3333 11.6669 19.3333Z"
                    fill="url(#paint0_linear_2055_3)"
                  />
                  <path
                    d="M19.4446 11.5555C18.978 11.5555 18.6669 11.4 18.3558 11.0889L10.578 3.31111C9.95577 2.68889 9.95577 1.75556 10.578 1.13334C11.2002 0.511116 12.1335 0.511116 12.7558 1.13334L20.5335 8.9111C21.1558 9.53333 21.1558 10.4667 20.5335 11.0889C20.2224 11.4 19.9113 11.5555 19.4446 11.5555Z"
                    fill="url(#paint1_linear_2055_3)"
                  />
                  <path
                    d="M17.9444 11.6667H1.05556C0.422222 11.6667 0 11.0667 0 10.1667C0 9.26667 0.422222 8.66667 1.05556 8.66667H17.9444C18.5778 8.66667 19 9.26667 19 10.1667C19 11.0667 18.5778 11.6667 17.9444 11.6667Z"
                    fill="url(#paint2_linear_2055_3)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2055_3"
                      x1="15.5558"
                      y1="8.44444"
                      x2="15.5558"
                      y2="19.3333"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#183078" />
                      <stop offset="1" stop-color="#16348D" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2055_3"
                      x1="15.5558"
                      y1="0.666672"
                      x2="15.5558"
                      y2="11.5555"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#183078" />
                      <stop offset="1" stop-color="#16348D" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2055_3"
                      x1="9.5"
                      y1="8.66667"
                      x2="9.5"
                      y2="11.6667"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#183078" />
                      <stop offset="1" stop-color="#16348D" />
                    </linearGradient>
                  </defs>
                </svg>
              </button>
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
