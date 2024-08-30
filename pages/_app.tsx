import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

function MyApp({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
