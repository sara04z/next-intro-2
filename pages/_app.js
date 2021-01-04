import { tw, setup } from "twind";
import twindConfig from "../twind.config";
/* import '../css/index.css' */

if (typeof window !== "undefined") {
  setup(twindConfig);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
