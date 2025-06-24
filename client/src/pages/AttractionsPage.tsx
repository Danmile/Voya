import { useEffect } from "react";
import { useAttractionStore } from "../store/useAttractionStore";
import { useParams } from "react-router-dom";

const AttractionsPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { getAttractions, attractions, cities, getCities } =
    useAttractionStore();
  useEffect(() => {
    if (cityName) {
      getCities(cityName);
      getAttractions(cityName);
    }
  }, [cityName, getAttractions]);
  const citiesLoaded = cities && cities.length > 0;

  if (!citiesLoaded) {
    return (
      <div className="text-2xl flex h-screen items-center justify-center">
        <h1>This page could not be found</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-full py-16">
      <div className="flex justify-start mt-10 mx-5">
        <h1 className="text-5xl font-semibold md:text-6xl">
          Must-see attractions in {cityName}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10 mx-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {attractions?.map((attraction, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden">
              <div className="absolute top-5 right-5">
                <button className="bg-gray-500/70 p-2 rounded-4xl hover:bg-black">
                  <img
                    src="/src/assets/bookmark.png"
                    className="opacity-80"
                    alt="bookMark"
                  />
                </button>
              </div>
              <img
                className="object-fill rounded-2xl w-full h-110 md:h-90"
                src={attraction.image}
              ></img>
              <h1 className="text-2xl mt-5 font-semibold">{attraction.name}</h1>
              <p className="text-xs">
                {attraction.address.split(",")[0].trim()}
              </p>
              <h1 className="text-1xl mt-1">{attraction.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttractionsPage;
