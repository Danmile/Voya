import { useParams, useLocation } from "react-router-dom";
import CityGrid from "../components/CitiesGrid";
import SearchBar from "../components/SearchBar";

const CityPage = () => {
  const { countryCode } = useParams<{ countryCode: string }>();

  const location = useLocation();
  const countryName = location.state?.countryName;

  return (
    <div className="relative w-full h-full py-16">
      <div className="flex justify-between mt-10 mx-5">
        <h1 className="text-5xl font-semibold md:text-6xl">
          Explore cities in {countryName}
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-10 mx-10">
        <CityGrid countryCode={countryCode} />
      </div>
    </div>
  );
};

export default CityPage;
