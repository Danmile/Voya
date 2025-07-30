import { useParams } from "react-router-dom";
import AttractionGrid from "../components/AttractionGrid";
import AttractionBarComponent from "../components/AttractionBarComponent";
import { useAttractionStore } from "../store/useAttractionStore";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AttractionsPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { favorites } = useAttractionStore();

  return (
    <div className="relative w-full h-full py-16">
      <Link to="/" className="block text-md md:text-lg lg:text-xl m-5">
        <button className="px-3 py-2 border-1 border-gray-600 rounded-2xl transition-transform duration-300 hover:scale-105">
          <ArrowLeft />
        </button>
      </Link>
      <div className="flex justify-between mt-5 mx-5">
        <h1 className="text-5xl font-semibold md:text-6xl">
          Choose your attractions in {cityName}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10 mx-10">
        <AttractionGrid cityName={cityName} />
      </div>
      {favorites.length !== 0 ? (
        <AttractionBarComponent
          AttrNum={favorites.length}
          cityName={cityName}
        />
      ) : null}
    </div>
  );
};

export default AttractionsPage;
