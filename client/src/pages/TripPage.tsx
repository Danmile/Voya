import { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";
import { useAttractionStore } from "../store/useAttractionStore";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TripPage = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const { getTrip, trips, loading, saveFavTrip, fullTripData } =
    useAttractionStore();
  const [saveTrip, setSaveTrip] = useState(false);
  const location = useLocation();
  const passedTrip = location.state?.trip;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndLog = async () => {
      if (passedTrip) {
        await getTrip(passedTrip);
        setSaveTrip(true);
      } else {
        await getTrip();
      }
    };

    fetchAndLog();
  }, [passedTrip, getTrip]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleSaveTrip = () => {
    if (saveTrip === true) return;
    setSaveTrip(true);
    if (fullTripData) {
      saveFavTrip(fullTripData);
    }
  };
  console.log(fullTripData);
  return (
    <div className="w-full h-screen py-16 overflow-hidden">
      <div className="mt-2 flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-full overflow-x-auto relative">
            <div className="w-full overflow-x-auto relative my-2">
              <div className="absolute top-0 left-2">
                <button
                  onClick={() => navigate(-1)}
                  className="px-3 py-2 border-1 border-gray-400 rounded-2xl transition-colors duration-200 hover:bg-gray-100"
                >
                  <ArrowLeft className="" />
                </button>
              </div>
              <div className="absolute right-2 top-0 z-10">
                <button
                  className={`px-3 py-2.5 border rounded-2xl transition-colors duration-200 ${
                    saveTrip
                      ? "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"
                      : "bg-white text-black border-gray-400 hover:bg-gray-100"
                  }`}
                  onClick={handleSaveTrip}
                >
                  {saveTrip ? "Saved" : "Save Trip"}
                </button>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-200 p-1 rounded-2xl mb-1 inline-flex gap-2">
                  {trips &&
                    Object.entries(trips)
                      .filter(([_, day]) => day.attractions.length > 0)
                      .map(([dayKey], idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedDay(dayKey)}
                          className={`px-4 py-2 ${
                            selectedDay === dayKey
                              ? "bg-white text-black border-gray-400 rounded-2xl"
                              : "text-black"
                          }`}
                        >
                          {dayKey}
                        </button>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapComponent selectedDay={selectedDay} trips={trips} />
    </div>
  );
};

export default TripPage;
