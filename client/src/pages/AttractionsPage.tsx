import { useParams } from "react-router-dom";
import AttractionGrid from "../components/AttractionGrid";

const AttractionsPage = () => {
  const { cityName } = useParams<{ cityName: string }>();

  return (
    <div className="w-full h-full py-16">
      <div className="flex justify-start mt-10 mx-5">
        <h1 className="text-5xl font-semibold md:text-6xl">
          Choose your attractions in {cityName}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10 mx-10">
        <AttractionGrid cityName={cityName} />
      </div>
    </div>
  );
};

export default AttractionsPage;
