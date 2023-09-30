import { isPosition, isLineCoords } from '../geoJSONHelper';

describe('isPosition', () => {
  test('should return true for valid position', () => {
    const validPosition: GeoJSON.Position = [1, 2];

    const result = isPosition(validPosition);

    expect(result).toBe(true);
  });

  test('should return false for invalid position', () => {
    const invalidPosition = [1, '2'];

    const result = isPosition(invalidPosition);

    expect(result).toBe(false);
  });
});

describe('isLineCoords', () => {
  test('should return true for valid line coordinates', () => {
    const validLineCoords: GeoJSON.Position[] = [[1, 2], [3, 4], [5, 6]];

    const result = isLineCoords(validLineCoords);

    expect(result).toBe(true);
  });

  test('should return false for invalid line coordinates', () => {
    const invalidLineCoords = [[1, 2], [3, '4'], [5, 6]];

    const result = isLineCoords(invalidLineCoords);

    expect(result).toBe(false);
  });
});
