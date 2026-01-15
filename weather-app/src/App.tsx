import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import DailyForecast from "./components/Cards/DailyForecast";
import HourlyForecast from "./components/Cards/HourlyForecast";
import CurrentWeather from "./components/Cards/CurrentWeather";
import AdditionalInfo from "./components/Cards/AdditionalInfo";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });
  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <AdditionalInfo />
    </div>
  );
}

export default App;
