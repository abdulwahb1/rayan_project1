import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col w-full max-w-[1920px] m-auto">
      {" "}
      <Component {...pageProps} />{" "}
    </main>
  );
}
