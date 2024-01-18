export default function getDistance(
  coords: GeolocationCoordinates | undefined,
  petLat: number,
  petLng: number,
) {
  if (!coords) {
    return null;
  }

  const userLat = coords.latitude;
  const userLng = coords.longitude;

  const R = 6371e3; // metres
  const φ1 = (userLat * Math.PI) / 180;
  const φ2 = (petLat * Math.PI) / 180;
  const Δφ = ((petLat - userLat) * Math.PI) / 180;
  const Δλ = ((petLng - userLng) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c * 0.001;
  return distance;
}
