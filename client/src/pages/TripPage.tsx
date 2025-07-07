import { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";
import { useParams } from "react-router-dom";
import { useAttractionStore } from "../store/useAttractionStore";

const TripPage = () => {
  const [selectedDay, setSelectedDay] = useState("Day1");
  const { cityName } = useParams();
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
        <p>Loading trip data...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full py-16">
      <div className="mx-16 mt-5 flex flex-col">
        <h1 className="text-center font-bold text-4xl">
          Welcome to {cityName}
        </h1>
        <div className="flex items-center justify-center flex-col mt-10">
          <label htmlFor="day" className="text-xl">
            Trip by day:
          </label>
          <div className="border border-gray-400 rounded p-1">
            <select
              className="mx-3 px-2 py-1 rounded text-black"
              id="day"
              name="day"
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              {trips &&
                Object.entries(trips)
                  .filter(([_, day]) => day.attractions.length > 0)
                  .map(([dayKey], idx) => (
                    <option key={idx} value={dayKey}>
                      {dayKey}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="w-full h-full border-1 border-gray-400 mt-5 p-1 rounded-2xl">
          <MapComponent selectedDay={selectedDay} trips={trips} />
        </div>
      </div>
    </div>
  );
};

export default TripPage;
