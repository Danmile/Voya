import { useEffect, useState } from "react";
import { useAttractionStore } from "../store/useAttractionStore";
import type { City } from "../store/useAttractionStore";

interface CityGridProps {
  countryCode?: string;
}

const CityGrid = ({ countryCode }: CityGridProps) => {
  const { cities, getCityByCountry, getCityDescription, cityDescription } =
    useAttractionStore();
  const [selectedCity, setSelectedCity] = useState<null | City>(null);

  useEffect(() => {
    if (!countryCode) return;
    getCityByCountry(countryCode);
  }, [countryCode]);

  useEffect(() => {
    if (selectedCity) {
      getCityDescription(selectedCity.name);
    }
  }, [selectedCity]);

  const SkeletonCard = () => (
    <div className="animate-pulse space-y-4">
      <div className="h-64 bg-black rounded-2xl w-full"></div>
      <div className="h-6 bg-black rounded w-3/4 mx-auto"></div>
    </div>
  );

  const trimTextToFullSentence = (
    text: string,
    maxChars: number = 700
  ): string => {
    const trimmed = text.slice(0, maxChars);
    const lastPeriod = trimmed.lastIndexOf(".");
    const lastExclamation = trimmed.lastIndexOf("!");
    const lastQuestion = trimmed.lastIndexOf("?");

    const lastEnd = Math.max(lastPeriod, lastExclamation, lastQuestion);

    return lastEnd !== -1 ? trimmed.slice(0, lastEnd + 1) : trimmed + "...";
  };

  // While loading
  if (!cities) {
    return (
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  // If cities is fetched but empty
  if (cities.length === 0) {
    return (
      <div className="text-xl flex h-screen items-center justify-center">
        <h1>No cities found for this country.</h1>
      </div>
    );
  }

  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {cities.map((city, index) => (
        <div
          key={index}
          onClick={() => setSelectedCity(city)}
          className="relative rounded-2xl overflow-hidden cursor-pointer"
        >
          <img
            className="object-fill rounded-2xl w-full h-110 md:h-90"
            src={city.imageUrl}
            alt={city.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src =
                "https://img.freepik.com/free-photo/big-city_1127-3102.jpg?semt=ais_hybrid&w=740";
            }}
          />
          <h1 className="text-2xl mt-5 font-semibold">{city.name}</h1>
        </div>
      ))}
      {selectedCity && (
        <div className="fixed inset-0 z-50 bg-opacity-70 bg-gray-300/50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative transition-transform duration-300 ease-out">
            <h1 className="text-4xl font-bold text-center mb-5">
              {selectedCity.name}
            </h1>
            <button
              onClick={() => setSelectedCity(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selectedCity.imageUrl}
              alt={selectedCity.name}
              className="rounded-xl w-full h-64 object-cover mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src =
                  "https://img.freepik.com/free-photo/big-city_1127-3102.jpg?semt=ais_hybrid&w=740";
              }}
            />
            <p className="text-gray-700">
              {cityDescription
                ? trimTextToFullSentence(cityDescription, 600)
                : "No description available."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CityGrid;
