import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";
type Props = {};

export default function HourlyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });

  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data.hourly.map((hour) => (
        <div className="flex flex-col gap-2 items-center p-2">
          <h2></h2>
          <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: false,
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon}></WeatherIcon>
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  );
}
