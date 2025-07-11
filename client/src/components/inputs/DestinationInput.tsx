interface City {
  name: string;
}

interface LocationInputProps {
  destination: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (cityName: string) => void;
  cities: City[] | null;
  showDropdown: boolean;
}

const DestinationInput = ({
  destination,
  onChange,
  cities,
  onSelect,
  showDropdown,
}: LocationInputProps) => (
  <div className="relative flex flex-col w-full p-3">
    <h1 className="hidden lg:block mb-1">Location</h1>
    <input
      type="text"
      value={destination}
      onChange={onChange}
      placeholder="Search your destination"
      className="text-sm rounded w-full focus:outline-none focus:ring-0"
    />
    {showDropdown && Array.isArray(cities) && cities?.length > 0 && (
      <ul className="absolute top-10 z-10 w-[14rem] bg-white border border-gray-300 rounded-4xl max-h-60 overflow-y-auto shadow-md md:top-15 scrollbar-hide">
        {cities?.map((city, index) => (
          <li
            key={index}
            onClick={() => onSelect(city.name)}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            {city.name}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default DestinationInput;
