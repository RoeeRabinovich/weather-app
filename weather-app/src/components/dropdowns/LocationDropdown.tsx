import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

export default function LocationDropdown({}: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent className="z-1001">
        {locations.map((city) => (
          <SelectItem key={city} value={city}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const locations = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Los Angeles",
  "Berlin",
  "Dubai",
  "Singapore",
  "Rome",
  "Barcelona",
  "Sydney",
  "Toronto",
];
