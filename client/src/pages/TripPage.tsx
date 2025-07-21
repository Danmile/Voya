import { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";
import { useAttractionStore } from "../store/useAttractionStore";

const TripPage = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const { getTrip, trips, loading } = useAttractionStore();

  useEffect(() => {
    const fetchAndLog = async () => {
      await getTrip();
    };
    fetchAndLog();
  }, [getTrip]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen py-16 overflow-hidden">
      <div className="mt-5 flex flex-col">
        <div className="flex items-center justify-center">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-center">
              <div className=" bg-gray-200 p-1 rounded-2xl mb-1">
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
      <MapComponent selectedDay={selectedDay} trips={trips} />
    </div>
  );
};

export default TripPage;
