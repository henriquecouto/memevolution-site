import { useEffect, useState } from "react";
import Background from "./components/Background";
import GlobalStyle from "./styles/global";
import Header from "./views/Header";
import Timeline from "./views/Timeline";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
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
