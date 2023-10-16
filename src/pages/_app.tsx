import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${inter.variable} bg-black font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
