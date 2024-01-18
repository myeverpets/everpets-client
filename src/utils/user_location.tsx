import { ReactNode } from 'react';
import { useGeolocated } from 'react-geolocated';

function UserLocation(): ReactNode {
  const geolocatedProps = useGeolocated();
  return geolocatedProps.isGeolocationAvailable ? (
    geolocatedProps.isGeolocationEnabled ? (
      geolocatedProps.coords ? (
        <div>
          Your current coordinates are:
          <ul>
            <li id="user_latitude">
              Latitude: {geolocatedProps.coords.latitude}
            </li>
            <li id="user_longitude">
              Longitude: {geolocatedProps.coords.longitude}
            </li>
            <li id="user_accuracy">
              Accuracy: {geolocatedProps.coords.accuracy}
            </li>
            <li id="user_altitude">
              Altitude: {geolocatedProps.coords.altitude}
            </li>
            <li id="user_altitude_accuracy">
              Altitude Accuracy: {geolocatedProps.coords.altitudeAccuracy}
            </li>
            <li id="user_heading">Heading: {geolocatedProps.coords.heading}</li>
            <li id="user_speed">Speed: {geolocatedProps.coords.speed}</li>
          </ul>
        </div>
      ) : (
        <div>Loading coordinates...</div>
      )
    ) : (
      <div>Geolocation is not enabled.</div>
    )
  ) : (
    <div>Geolocation is not available.</div>
  );
}
export default UserLocation;
