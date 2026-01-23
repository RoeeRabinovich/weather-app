const API_KEY = import.meta.env.VITE_API_KEY;
import { geocodeSchema } from "./schema/geocodeSchema";
import { weatherSchema } from "./schema/weatherSchema";

export const getWeather = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`
  );
  const data = await response.json();

  return weatherSchema.parse(data);
};

export const getGeocode = async (location: string) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
  );
  const data = await response.json();
  return geocodeSchema.parse(data);
};
