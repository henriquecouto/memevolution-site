import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../../components/Loading";
import Meme from "../../entities/Meme";
import {
  TimelineProviderProps,
  TimelineStateType,
  Year,
} from "./TimelineStore.types";

const TimelineContext = createContext({} as TimelineStateType<Meme>);

export const useTimeline = () => useContext(TimelineContext);

export const TimelineProvider: FC<TimelineProviderProps> = ({
  children,
  memeRepository,
}) => {
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState<Array<Year<Meme>>>([]);

  const loadData = useCallback(async () => {
    await memeRepository.loadAllMemes();

    setYears(
      memeRepository.getMemesYears().map(
        (year) =>
          new Year<Meme>({
            name: year,
            values: memeRepository.getMemesByYear(year),
          })
      )
    );
    setLoading(false);
  }, [memeRepository]);

  useEffect(() => {
    if (document.hasFocus()) {
      loadData();
    } else {
      window.addEventListener("focus", loadData);
    }
  }, [loadData]);

  const loadByCategory = (id: string) =>
    memeRepository.getMemesByCategory(id) || [];

  if (loading) {
    return <Loading />;
  }

  return (
    <TimelineContext.Provider value={{ years, loadByCategory }}>
      {children}
    </TimelineContext.Provider>
  );
};
