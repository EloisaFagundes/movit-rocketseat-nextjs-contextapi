import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContexts";
import { CountdownProvider } from "../contexts/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
