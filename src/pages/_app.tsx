import "@/styles/globals.css";
import "@/styles/project.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={"anonymous"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="magicscroll/magicscroll.css"
      />
      <script type="text/javascript" src="magicscroll/magicscroll.js"></script>

      <Component {...pageProps} />
    </div>
  );
}
