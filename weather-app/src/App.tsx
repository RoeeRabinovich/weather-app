import DailyForecast from "./components/Cards/DailyForecast";
import HourlyForecast from "./components/Cards/HourlyForecast";
import CurrentWeather from "./components/Cards/CurrentWeather";
import AdditionalInfo from "./components/Cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 40, lon: 25 });
  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
  };

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
