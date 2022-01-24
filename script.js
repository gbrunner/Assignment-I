var map = L.map('mapid').setView([38.62,-90.25], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 10,
  minZoom:8,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var theGrove=L.marker([-90.25434454458241,38.627400228141404]).addTo(map).bindPopup('Sultan Mediterranean Restaurant').openPopup();
        
var centralwestend=L.marker([-90.26080783227775,38.65082907398419]).addTo(map).bindPopup('Ranoush');

var southcounty=L.marker([-90.37811280225854,38.50434951523715]).addTo(map).bindPopup('Pad Thai');
    
var soulard=L.marker([-90.2054408157469,38.60893358482006]).addTo(map).bindPopup('Chava’s Mexican Restaurant');

var thehill=L.marker([-90.2686562482886,38.61667495683198]).addTo(map).bindPopup('Rigazzi’s Italian Restaurant');
