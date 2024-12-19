import { useEffect } from "react";
import "./Ubicacion.css";

const LocationViewer = () => {
  // Coordenadas de una ubicación específica
  const fixedLocation = {
    latitude: -29.417578106898308, // Latitud Polo Tecnologico La Rioja
    longitude: -66.86007057060593, // Longitud Polo Tecnologico La Rioja
  };

  useEffect(() => {
    loadMap(fixedLocation.latitude, fixedLocation.longitude);
  }, []);

  const loadMap = (latitude, longitude) => {
    const mapScript = document.createElement("script");
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCJ2SWPCnU-mtH1_A96pXiTPMvBgd8bvD0&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;

    // Inicializar el mapa cuando el script se haya cargado
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 12, // Ajusta el nivel de zoom según lo que necesites
      });

      // Agregar un marcador en la ubicación fija
      new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map,
        title: "Ubicación fija",
      });
    };

    document.body.appendChild(mapScript);
  };

  return (
    <div className="location-viewer">
      <h1>Visor de Ubicación</h1>
      <div id="map" className="map-container"></div>
    </div>
  );
};

export default LocationViewer;
