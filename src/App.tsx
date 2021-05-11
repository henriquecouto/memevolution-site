import Background from "./components/Background";
import FirebaseCategoryRepository from "./repositories/implementations/FirebaseCategoryRepository";
import FirebaseMemeRepository from "./repositories/implementations/FirebaseMemeRepository";
import { TimelineProvider } from "./stores/Timeline";
import GlobalStyle from "./styles/global";
import Header from "./views/Header";
import Timeline from "./views/Timeline";

const categoryRepository = new FirebaseCategoryRepository();
const memeRepository = new FirebaseMemeRepository(categoryRepository);

const App = () => {
  return (
    <TimelineProvider memeRepository={memeRepository}>
      <GlobalStyle />

      <Background>
        <Header />
        <Timeline />
      </Background>
    </TimelineProvider>
  );
};

export default App;
