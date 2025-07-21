import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAttractionStore } from "../store/useAttractionStore";

const PopularDestinations = () => {
  const { countries, getCountries } = useAttractionStore();
  useEffect(() => {
    getCountries();
  }, []);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -scrollRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: scrollRef.current?.offsetWidth,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative w-full px-4 md:flex md:flex-col md:justify-center md:items-center">
      <button
        onClick={scrollLeft}
        className="hidden md:block md:absolute left-[1%] top-1/2 z-10 bg-gray-200 p-2 shadow rounded"
      >
        ←
      </button>
      <h1 className="text-4xl font-bold text-center mt-10">Where to next?</h1>
      <div
        ref={scrollRef}
        className="w-full flex snap-x snap-mandatory overflow-x-auto my-10 scrollbar-hide max-w-[100rem]"
      >
        {countries?.map((country) => (
          <Link
            to={`/cities/${encodeURIComponent(country.code)}`}
            state={{ countryName: country.name }}
            key={country.name}
            className="shrink-0 w-72 md:w-1/3 rounded-2xl px-4"
          >
            <img
              className="object-cover rounded-2xl w-full h-72 md:h-90"
              src={country.imageUrl}
              width={500}
            ></img>
            <h1 className="text-center text-2xl mt-5 font-semibold">
              {country.name}
            </h1>
          </Link>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="hidden md:block md:absolute right-[1%] top-1/2 z-10 bg-gray-200 p-2 shadow rounded"
      >
        →
      </button>
    </div>
  );
};

export default PopularDestinations;
