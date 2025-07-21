import { useEffect } from "react";
import { useAttractionStore } from "../store/useAttractionStore";

interface CityGridProps {
  countryCode?: string;
}

const CityGrid = ({ countryCode }: CityGridProps) => {
  const { cities, getCityByCountry } = useAttractionStore();

  useEffect(() => {
    if (!countryCode) return;
    getCityByCountry(countryCode);
  }, [countryCode]);

  // If cities is undefined (e.g., not yet fetched), show loading
  if (!cities) {
    return (
      <div className="text-xl flex h-screen items-center justify-center">
        <h1>Loading cities...</h1>
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
        <div key={index} className="relative rounded-2xl overflow-hidden">
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
    </div>
  );
};

export default CityGrid;
