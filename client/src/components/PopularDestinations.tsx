import { popularCountries } from "../constants/PopularCounties";
import { useRef } from "react";

const PopularDestinations = () => {
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
        className="hidden md:block md:absolute left-0 top-1/2 z-10 bg-white p-2 shadow rounded"
      >
        ←
      </button>
      <h1 className="text-4xl font-bold text-center mt-10">Where to next?</h1>
      <div
        ref={scrollRef}
        className="w-full flex snap-x snap-mandatory overflow-x-auto my-10 scrollbar-hide"
      >
        {popularCountries.map((country) => (
          <div
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
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="hidden md:block md:absolute right-0 top-1/2 z-10 bg-white p-2 shadow rounded"
      >
        →
      </button>
    </div>
  );
};

export default PopularDestinations;
