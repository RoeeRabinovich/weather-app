
const API_KEY = import.meta.env.VITE_API_KEY;
import { weatherSchema } from './schema/weatherSchema';


export const getWeather = async ({lat , lon } : {lat:number , lon:number}) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,minutely&appid=${API_KEY}`);
          const data = await response.json()

    return weatherSchema.parse(data);
}