
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { City } from "@/types/event";

interface CitySelectorProps {
  onCityChange: (city: City) => void;
  selectedCity: City;
}

export function CitySelector({ onCityChange, selectedCity }: CitySelectorProps) {
  const cities: City[] = ["All", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"];
  
  const handleCityChange = (value: string) => {
    onCityChange(value as City);
  };
  
  return (
    <div className="w-full max-w-xs">
      <Select value={selectedCity} onValueChange={handleCityChange}>
        <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-sydney-light">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
