import type { AppProps } from "next/app";

import { ResponsiveProvider } from "~/styles";

import "bootstrap/dist/css/bootstrap.min.css";
import "~/styles/reset.css";
import "~/styles/core.css";
import "~/styles/typography.css";
import "~/styles/color.css";
import "~/styles/animations.css";
import "~/styles/scroll.css";
import "~/styles/sizing.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ResponsiveProvider>
      <Component {...pageProps} />
    </ResponsiveProvider>
  );
}

export default App;
