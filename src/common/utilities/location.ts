export function getCurrentLocation(): void {
  new Promise((resolve) => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        resolve({
          lat,
          lng,
        });
      },
      () => {
        resolve({ lat: 0.0, lng: 0.0 });
      },
    );
  });
}
