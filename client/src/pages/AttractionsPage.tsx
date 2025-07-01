import { useParams } from "react-router-dom";
import AttractionGrid from "../components/AttractionGrid";
import AttractionBarComponent from "../components/AttractionBarComponent";
import { useAttractionStore } from "../store/useAttractionStore";

const AttractionsPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { favorites } = useAttractionStore();
  console.log(favorites);

  return (
    <div className="relative w-full h-full py-16">
      <div className="flex justify-between mt-10 mx-5">
        <h1 className="text-5xl font-semibold md:text-6xl">
          Choose your attractions in {cityName}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10 mx-10">
        <AttractionGrid cityName={cityName} />
      </div>
      {favorites.length !== 0 ? (
        <AttractionBarComponent AttrNum={favorites.length} />
      ) : null}
    </div>
  );
};

export default AttractionsPage;
