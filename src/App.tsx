import Background from "./components/Background";
import GlobalStyle from "./styles/global";
import Header from "./views/Header";
import Timeline from "./views/Timeline";

const App = () => {
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
