import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useAttractionStore } from "../store/useAttractionStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = range;
  const [budget, setBudget] = useState<number | null>(null);

  const navigate = useNavigate();

  const { cities, getCities, setTimeAndBudget } = useAttractionStore();

  const handleSelect = async (cityName: string) => {
    setDestination(cityName);
    setShowDropdown(false);
    setIsCitySelected(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    setShowDropdown(!!value.trim());
    // Only allow navigation if input matches a city exactly
    const isValidCity = cities?.some(
      (city) => city.name.toLowerCase() === value.trim().toLowerCase()
    );
    setIsCitySelected(isValidCity || false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      isCitySelected &&
      destination.trim() &&
      destination === cities?.[0].name
    ) {
      const formatDate = (date: Date | null) =>
        date ? date.toISOString().split("T")[0] : null;

      const formattedStart = formatDate(startDate); // e.g. "2025-07-01"
      const formattedEnd = formatDate(endDate); // e.g. "2025-07-03"
      setTimeAndBudget(
        { startDate: formattedStart, endDate: formattedEnd },
        budget
      );
      navigate(`/attractions/${encodeURIComponent(destination)}`);
    } else {
      alert("Please select a valid destination.");
    }
  };

  useEffect(() => {
    if (!destination.trim()) return;

    const timeout = setTimeout(() => {
      getCities(destination);
    }, 300);
    return () => clearTimeout(timeout);
  }, [destination, getCities]);

  return (
    <div className="bg-white rounded-4xl w-full mx-auto font-semibold drop-shadow-xl">
      <form
        className="flex items-center p-1 md:flex-row gap-4 md:justify-start w-full"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="flex lg:flex-row gap-4 flex-1 p-1">
          <div className="hidden lg:flex justify-center items-center bg-blue-100 rounded-4xl p-4">
            <img src="/src/assets/pin.png" alt="" width={150} />
          </div>
          <div className="flex relative flex-col w-full p-3">
            <h1 className="hidden lg:block mb-1">Location</h1>
            <input
              type="text"
              value={destination}
              onChange={handleInputChange}
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
          <div className="hidden lg:flex justify-center items-center bg-violet-100 rounded-4xl p-4">
            <img src="/src/assets/date.png" alt="" width={150} />
          </div>
          <div className="hidden lg:flex flex-col w-full p-3">
            <h1 className="mb-1">Date</h1>
            <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) =>
                setRange(update as [Date | null, Date | null])
              }
              isClearable
              placeholderText="Select a date range"
              className="text-sm rounded w-full focus:outline-none focus:ring-0"
            />
          </div>
          <div className="hidden lg:flex justify-center items-center bg-green-100 rounded-4xl p-4">
            <img src="/src/assets/dollar.png" width={150} />
          </div>

          <div className="hidden lg:flex flex-col w-full p-3">
            <h1 className="mb-1">Price</h1>
            <input
              type="number"
              value={budget !== null ? budget : ""}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="text-sm rounded w-full focus:outline-none focus:ring-0"
              placeholder="Your budget"
            />
          </div>
        </div>
        <button
          type="submit"
          className={`flex items-center justify-center gap-2 p-3 rounded-4xl ${
            isCitySelected && destination.trim()
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400"
          } transition`}
        >
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
