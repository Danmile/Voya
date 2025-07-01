import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom";

const TripPage = () => {
  const { cityName } = useParams();
  return (
    <div className="w-full h-full py-16">
      <div className="mx-16 mt-5 flex flex-col">
        <h1 className="text-center font-bold text-4xl">
          Welcome to {cityName}
        </h1>
        <div className="flex items-center justify-center gap-10 mt-10">
          <div className="border-1 w-100 flex justify-evenly">
            <button className="p-2 bg-white border-r-1 border-gray-400 cursor-pointer text-center font-medium md:text-md hover:border-gray-700">
              day 1
            </button>
            <button className="p-2 bg-white border-gray-400 cursor-pointer text-center font-medium md:text-md hover:border-gray-700">
              day 2
            </button>
            <button className="p-2 bg-white border-l-1 border-gray-400 cursor-pointer text-center font-medium md:text-md hover:border-gray-700">
              day 3
            </button>
          </div>
        </div>

        <div className="w-full h-[500px] mt-5">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }} // This is crucial
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>A pretty CSS3 popup</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default TripPage;
