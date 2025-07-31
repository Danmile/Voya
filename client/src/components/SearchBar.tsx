import { Search, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useAttractionStore } from "../store/useAttractionStore";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import BudgetInput from "./inputs/BudgetInput";
import DateInput from "./inputs/DateInput";
import DestinationInput from "./inputs/DestinationInput";
import { toast } from "react-hot-toast";
import pin from "../assets/pin.png";
import dollar from "../assets/dollar.png";
import dateImg from "../assets/date.png";
import { ArrowLeft } from "lucide-react";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = range;
  const [budget, setBudget] = useState<number | null>(null);
  const [step, setStep] = useState(0);

  const isMobile = useIsMobile();

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

    if (!destination.trim()) {
      toast.error("Please enter a destination.");
      return;
    }

    if (
      !cities?.some(
        (city) => city.name.toLowerCase() === destination.toLowerCase()
      )
    ) {
      toast.error("Please select a valid destination from the list.");
      return;
    }

    if (!startDate) {
      toast.error("Please select a start date.");
      return;
    }

    if (!endDate) {
      toast.error("Please select an end date.");
      return;
    }

    if (startDate && endDate && startDate > endDate) {
      toast.error("End date cannot be before start date.");
      return;
    }

    if (budget === null || budget === undefined) {
      toast.error("Please enter a budget.");
      return;
    }

    if (budget <= 0) {
      toast.error("Budget must be a positive number.");
      return;
    }

    // All validations passed — proceed
    const formatDate = (date: Date | null) =>
      date ? date.toISOString().split("T")[0] : null;

    const formattedStart = formatDate(startDate);
    const formattedEnd = formatDate(endDate);

    setTimeAndBudget(
      { startDate: formattedStart, endDate: formattedEnd },
      budget
    );

    navigate(`/attractions/${encodeURIComponent(destination)}`);
  };

  const handleNextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (step === 0 && (!destination.trim() || !isCitySelected)) {
      toast.error("Please choose a valid destination.");
      return;
    }

    if (step === 1 && (!startDate || !endDate)) {
      toast.error("Please choose a valid date range.");
      return;
    }

    setStep(step + 1);
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
            <img src={pin} alt="" width={150} />
          </div>
          {step > 0 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setStep(step - 1);
              }}
              className="p-2 border-1 border-gray-400 rounded-2xl"
            >
              <ArrowLeft />
            </button>
          )}

          {step === 0 && (
            <DestinationInput
              destination={destination}
              onChange={handleInputChange}
              cities={cities}
              showDropdown={showDropdown}
              onSelect={handleSelect}
            />
          )}

          <div className="hidden lg:flex justify-center items-center bg-violet-100 rounded-4xl p-4">
            <img src={dateImg} alt="" width={150} />
          </div>
          {isMobile ? (
            step === 1 && <DateInput range={range} setRange={setRange} />
          ) : (
            <DateInput range={range} setRange={setRange} />
          )}

          <div className="hidden lg:flex justify-center items-center bg-green-100 rounded-4xl p-4">
            <img src={dollar} width={150} />
          </div>
          {isMobile ? (
            step === 2 && <BudgetInput budget={budget} onChange={setBudget} />
          ) : (
            <BudgetInput budget={budget} onChange={setBudget} />
          )}
        </div>
        {isMobile && step !== 2 ? (
          <button
            type="button"
            onClick={(e) => handleNextStep(e)}
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
              <ArrowRight />
            </div>
          </button>
        ) : (
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
        )}
      </form>
    </div>
  );
};

export default SearchBar;
