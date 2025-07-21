import { popularCountries } from "../constants/PopularCounties";
import { toast } from "react-hot-toast";
const ExploreComponent = () => {
  return (
    <div className="relative w-full h-full">
      <div className="h-150 grid grid-cols-3 auto-rows-fr gap-1 rounded-2xl bg-white border-black my-4">
        {popularCountries.slice(9, 18).map((country, index) => {
          const tallCards = [1, 3, 6, 9];
          const isTall = tallCards.includes(index);
          return (
            <div
              key={index}
              className={`${isTall ? "row-span-2" : "row-span-1"}`}
            >
              <img
                className="w-full h-full rounded-xl opacity-30 object-cover"
                src={country.imageUrl}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full h-full flex flex-wrap"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white/90 p-10 rounded-2xl drop-shadow-2xl flex flex-col items-center justify-center md:p-20">
          <h1 className="text-black/80 font-bold text-4xl text-center md:text-5xl">
            Explore
          </h1>
          <h1 className="text-md text-center md:text-xl">Top Attractions</h1>
          <button
            onClick={() => toast.success("This function is coming soon")}
            className="bg-white text-sm rounded-2xl p-3 drop-shadow-xl mt-4 cursor-pointer text-center transition duration-300 hover:scale-105 md:text-lg"
          >
            DISCOVER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreComponent;
