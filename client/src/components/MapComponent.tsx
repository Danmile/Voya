import type { Trips } from "../store/useAttractionStore";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";

interface MapComponentProps {
  selectedDay: string | null;
  trips: Trips | null;
}

const MapComponent = ({ selectedDay, trips }: MapComponentProps) => {
  const RecenterMap = ({ lat, lon }: { lat: number; lon: number }) => {
    const map = useMap();

    useEffect(() => {
      if (lat && lon) {
        map.setView([lat, lon], map.getZoom());
      }
    }, [lat, lon, map]);

    return null;
  };

  const getCenterBySelectedDay = (
    trips: Trips | null,
    selectedDay: string | null
  ): [number, number] => {
    if (!trips || !selectedDay) return [51.505, -0.09]; // fallback

    const day = trips[selectedDay];
    if (day && day.attractions.length > 0) {
      const first = day.attractions[0];
      return [first.lat, first.lon];
    }

    return [51.505, -0.09]; // fallback
  };

  const center = getCenterBySelectedDay(trips, selectedDay);
  return (
    <div className="w-screen h-full overflow-hidden">
      <MapContainer
        center={center}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RecenterMap lat={center[0]} lon={center[1]} />
        {trips &&
          Object.entries(trips)
            .filter(([dayKey]) => !selectedDay || selectedDay === dayKey)
            .flatMap(([dayKey, day]) =>
              day.attractions.map((attraction, i) => (
                <Marker
                  key={`${dayKey}-${i}`}
                  position={[attraction.lat, attraction.lon]}
                >
                  <Popup>
                    <strong>{attraction.name}</strong>
                    <br />
                    {attraction.address}
                  </Popup>
                </Marker>
              ))
            )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
