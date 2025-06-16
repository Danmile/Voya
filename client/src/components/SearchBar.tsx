import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useAttractionStore } from "../store/useAttractionStore";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const { cities, getCities } = useAttractionStore();

  const handleSelect = async (cityName: string) => {
    setDestination(cityName);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (!destination.trim()) return;

    const timeout = setTimeout(() => {
      getCities(destination);
    }, 300);

    return () => clearTimeout(timeout);
  }, [destination]);

  return (
    <div className="bg-white rounded-4xl w-full mx-auto font-semibold drop-shadow-xl">
      <form
        className="flex items-center p-1 md:flex-row gap-4 md:justify-start w-full"
        action=""
      >
        <div className="flex md:flex-row gap-4 flex-1 p-1">
          <div className="hidden md:flex justify-center items-center bg-blue-100 rounded-4xl p-4">
            <img src="/src/assets/pin.png" alt="" width={150} />
          </div>
          <div className="relative flex flex-col w-full p-3">
            <h1 className="hidden md:block mb-1">Location</h1>
            <input
              type="text"
              value={destination}
              onChange={(e) => {
                const value = e.target.value;
                setDestination(value);
                setShowDropdown(true);
                if (!value.trim()) setShowDropdown(false);
              }}
              className="text-sm rounded w-full focus:outline-none focus:ring-0"
              placeholder="Search your destination"
            />
            {showDropdown && cities && cities.length > 0 && (
              <ul className="absolute top-10 z-10 w-[14rem] bg-white border border-gray-300 rounded-4xl max-h-60 overflow-y-auto shadow-md md:top-15">
                {cities.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(city.name)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {city.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden md:flex justify-center items-center bg-violet-100 rounded-4xl p-4">
            <img src="/src/assets/date.png" alt="" width={150} />
          </div>
          <div className="hidden md:flex flex-col w-full p-3">
            <h1 className="mb-1">Date</h1>
            <input
              type="date"
              className="text-sm rounded w-full focus:outline-none focus:ring-0"
              placeholder="Choose a date"
            />
          </div>
          <div className="hidden lg:flex justify-center items-center bg-green-100 rounded-4xl p-4">
            <img src="/src/assets/dollar.png" width={150} />
          </div>

          <div className="hidden lg:flex flex-col w-full p-3">
            <h1 className="mb-1">Price</h1>
            <input
              type="number"
              className="text-sm rounded w-full focus:outline-none focus:ring-0"
              placeholder="Your budget"
            />
          </div>
        </div>
        <button className="bg-blue-500 rounded-4xl p-1 flex items-center justify-center gap-1 cursor-pointer lg:p-3">
          <h1 className="hidden lg:block rounded-4xl text-white font-normal mx-2">
            Find my adventure
          </h1>
          <div className="lg:bg-white rounded-4xl p-2.5 text-white lg:text-black">
            <Search />
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
