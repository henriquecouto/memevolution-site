import Background from "./components/Background";
import GlobalStyle from "./styles/global";
import Header from "./views/Header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Background>
        <Header />
      </Background>
    </>
  );
};

export default App;
