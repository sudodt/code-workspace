import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

export function ChangeView({ coords }) {
    const map = useMap();
    map.setView(coords, 12);
    return null;
}

export default function Map() {
    const [geoData, setGeoData] = useState({ lat: 10.7849727, lng: 106.7017059 });

    const center = [geoData.lat, geoData.lng];
    return (
        <MapContainer
            zoom={13}
            style={{height: '100vh'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geoData.lat && geoData.lng && (
                <Marker position={[geoData.lat, geoData.lng]}/>
            )}
            <ChangeView coords={center}/>
        </MapContainer>
    );
}
