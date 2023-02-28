import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Roboto } from '@next/font/google';

const robo = Roboto({
  subsets: ['latin'],
  variable: '--font-robo',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className= {`${robo.variable} font-sans`}>

    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    </main>
  );
}
