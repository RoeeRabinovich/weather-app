type Props = {
  src: string;
  className?: string;
};
export default function WeatherIcon({ src, className }: Props) {
  return (
    <img
      className={className ? className : "size-8"}
      src={`https://openweathermap.org/img/wn/${src}.png`}
      alt="Weather icon"
    />
  );
}
