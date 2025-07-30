import { useEffect } from "react";
import { useAttractionStore } from "../store/useAttractionStore";
import { Link } from "react-router-dom";

const FavoriteTrips = () => {
  const { userTrips, getUserTrips, loading, removeUserTrip } =
    useAttractionStore();

  useEffect(() => {
    getUserTrips();
  }, [getUserTrips]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!userTrips?.length) {
    return (
      <div className="text-3xl font-bold mx-auto py-16 flex justify-center items-center h-screen">
        <h1 className="text-center">No trips planned yet...</h1>
      </div>
    );
  }

  const handleRemoveTrip = async (tripId: string) => {
    await removeUserTrip(tripId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 my-10">Your Trips</h1>
      <div className="space-y-6">
        {userTrips.map((trip, index) => {
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
              <div className="absolute top-5 right-5">
                <button
                  className="py-1 px-3 bg-white rounded-2xl cursor-pointer hover:border-gray-600 hover:scale-105 md:border-1 md:border-gray-400"
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
                <p className="text-gray-700 mb-1">Cost: ${trip.totalCost}</p>
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
