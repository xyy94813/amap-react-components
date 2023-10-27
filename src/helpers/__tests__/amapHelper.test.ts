import {
  isLatLng,
  isLatLngArr,
  isPolyline,
} from '../amapHelper';

describe('isLatLng', () => {
  test('should return true for valid LngLat object', () => {
    const input = { lat: 123, lng: 456 };
    expect(isLatLng(input)).toBe(true);
  });

  test('should return false for invalid LngLat object', () => {
    const input = { lat: 123 };
    expect(isLatLng(input)).toBe(false);
  });

  test('should return false for non-LngLat object', () => {
    const input = { foo: 'bar' };
    expect(isLatLng(input)).toBe(false);
  });
});

describe('isLatLngArr', () => {
  test('returns true for an empty array', () => {
    expect(isLatLngArr([])).toBe(true);
  });

  test('returns true for an array with valid LngLat objects', () => {
    const validArray = [
      { lat: 123, lng: 456 },
    ];
    expect(isLatLngArr(validArray)).toBe(true);
  });

  test('returns false for an array with invalid objects', () => {
    const invalidArray = [
      { lat: 1, lng: 1 },
      { foo: 'bar' }, // Invalid object
    ];
    expect(isLatLngArr(invalidArray)).toBe(false);
  });

  // Add more test cases as needed
});

describe('isPolyline', () => {
  test('should return true for a valid Polyline object', () => {
    const polyline = { className: 'Overlay.Polyline' };
    expect(isPolyline(polyline)).toBe(true);
  });

  test('should return false for an invalid object', () => {
    const notPolyline = { className: 'SomeOtherClass' };
    expect(isPolyline(notPolyline)).toBe(false);
  });
});
