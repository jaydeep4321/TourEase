// console.log('Hello from client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5ZGVlcDQzMjEiLCJhIjoiY2xmaTNydWFqMjRndjN4cGdjbHNndDg4YiJ9.YdSg4s7VP0tBWUDVuXYPRA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jaydeep4321/clfi84q2o00b601mx3ee4ch12',
  scrollZoom: false,
  //   center: [-118.4726064226037, 33.98424230816888],
  //   zoom: 3,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  //Create marker
  const el = document.createElement('dev');
  el.className = 'marker';

  //Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  //Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 200,
    right: 200,
  },
});
