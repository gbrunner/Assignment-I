      require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 13,
          center: [-90.2, 38.6] // longitude, latitude
        });
       
var theGrove=L.marker([-90.25434454458241,38.627400228141404]).addTo(map).bindPopup('Sultan Mediterranean Restaurant').openOn(map);
        
var   centralwestend=L.marker([-90.26080783227775,38.65082907398419]).addTo(map).bindPopup('Ranoush').openOn(map);

var southcounty=L.marker([-90.37811280225854,38.50434951523715]).addTo(map).bindPopup('Pad Thai').openOn(map);
    
var soulard=L.marker([-90.2054408157469,38.60893358482006]).addTo(map).bindPopup('Chava’s Mexican Restaurant').openOn(map);

var thehill=L.marker([-90.2686562482886,38.61667495683198]).addTo(map).bindPopup('Rigazzi’s Italian Restaurant').openOn(map);
      });
