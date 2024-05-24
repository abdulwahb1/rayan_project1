import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`flex flex-col w-full max-w-[1920px] m-auto ${inter.className}`}
    >
      {" "}
      <Component {...pageProps} />{" "}
    </main>
  );
}
