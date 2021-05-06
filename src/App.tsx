import { useEffect, useState } from "react";
import Background from "./components/Background";
import Loading from "./components/Loading";
import GlobalStyle from "./styles/global";
import Header from "./views/Header";
import Timeline from "./views/Timeline";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stopLoading = () => setTimeout(() => setLoading(false), 3000);
    if (document.hasFocus()) {
      stopLoading();
    } else {
      window.addEventListener("focus", stopLoading);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <GlobalStyle />

      <Background>
        <Header />
        <Timeline />
      </Background>
    </>
  );
};

export default App;
