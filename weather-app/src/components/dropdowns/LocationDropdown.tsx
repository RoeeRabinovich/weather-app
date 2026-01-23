import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Select value={location} onValueChange={(value) => setLocation(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Locations" />
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
