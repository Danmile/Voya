import { useAttractionStore } from "../store/useAttractionStore";
import { useEffect, useState } from "react";
import type { UserTrips } from "../store/useAttractionStore";
import { Link } from "react-router-dom";

const FavoriteTrips = () => {
  const { userTrips, getUserTrips, removeUserTrip } = useAttractionStore();
  const [tripList, setTripList] = useState<UserTrips[]>();

  useEffect(() => {
    const fetchTrips = async () => {
      await getUserTrips();

      // Check and extract trips safely
      if (userTrips?.length) {
        setTripList(userTrips);
      }
    };

    fetchTrips();
  }, [getUserTrips, userTrips]);

  if (!tripList?.length) {
    return (
      <div className="text-center text-xl mt-10">No trips planned yet.</div>
    );
  }
  const handleRemoveTrip = async (tripId: string) => {
    await removeUserTrip(tripId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 my-10">Your Trips</h1>
      <div className="space-y-6">
        {tripList.map((trip, index) => {
          const firstDay = trip.groupedByDay?.[0];
          const firstAttraction = firstDay?.attractions?.[0];

          const imageUrl = firstAttraction?.image || "/fallback.jpg";
          const city = firstAttraction?.cityName || "Unknown City";

          return (
            <div
              key={trip._id || index}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/3 w-full h-56 sm:h-full">
                <img
                  src={imageUrl}
                  alt={city}
                  className="object-cover w-full h-56"
                />
              </div>
              <div className="absolute top-10 right-10">
                <button
                  className="py-1 px-2 border-1 border-gray-400 rounded-2xl cursor-pointer hover:border-gray-600 hover:scale-105"
                  onClick={() => handleRemoveTrip(trip._id)}
                >
                  X
                </button>
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                <h2 className="text-2xl font-semibold mb-2">{city}</h2>
                <p className="text-gray-700 mb-1">
                  Duration: {trip.numDays} days
                </p>
                <p className="text-gray-700 mb-1">Budget: ${trip.totalCost}</p>
                <button className="mt-4 w-fit px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <Link
                    to={`/trip/${encodeURIComponent(city ?? "")}`}
                    state={{ trip }}
                  >
                    View Details
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteTrips;
