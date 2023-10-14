import {
  isPosition,
  isLineCoords,
  isSamePosition,
  isRingLineCoords,
} from '../geoJSONHelper';

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
    const validLineCoords1: GeoJSON.Position[] = [[1, 2], [3, 4]];
    const validLineCoords2: GeoJSON.Position[] = [[1, 2], [3, 4], [5, 6]];

    expect(isLineCoords(validLineCoords1)).toBe(true);
    expect(isLineCoords(validLineCoords2)).toBe(true);
  });

  test('should return false for invalid line coordinates', () => {
    const invalidLineCoords1 = [[1, 2], [3, '4'], [5, 6]];
    const invalidLineCoords2 = [[0, 0]];

    expect(isLineCoords(invalidLineCoords1)).toBe(false);
    expect(isLineCoords(invalidLineCoords2)).toBe(false);
  });
});

describe('isSamePosition', () => {
  it('should return true if the positions are equal', () => {
    const positionA: GeoJSON.Position = [0, 0];

    expect(isSamePosition(positionA, positionA)).toBe(true);
  });

  it('should return true if the positions are equivalent', () => {
    const positionA: GeoJSON.Position = [0, 0];
    const positionB: GeoJSON.Position = [0, 0];

    expect(isSamePosition(positionA, positionB)).toBe(true);
  });

  it('should throw an error if the positions are invalid', () => {
    const positionA: GeoJSON.Position = [0, 0];
    const positionB: GeoJSON.Position = [null, '0'] as any;

    expect(() => isSamePosition(positionA, positionB)).toThrow('invalid position');
    expect(() => isSamePosition(positionB, positionA)).toThrow('invalid position');
  });
});

describe('isRingLineCoords', () => {
  it('should return false if coords are not line coordinates', () => {
    const coords = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    expect(isRingLineCoords(coords)).toBe(false);
  });

  it('should return false if coords length is less than 4', () => {
    const coords = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    expect(isRingLineCoords(coords)).toBe(false);
  });

  it('should return false if first and last positions are not the same', () => {
    const coords = [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ];
    expect(isRingLineCoords(coords)).toBe(false);
  });

  it('should return true if coords are line coordinates, length is greater than 3, and first and last positions are the same', () => {
    const coords = [
      [0, 0],
      [1, 1],
      [2, 2],
      [0, 0],
    ];
    expect(isRingLineCoords(coords)).toBe(true);
  });
});
