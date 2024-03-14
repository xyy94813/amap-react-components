import amapPolygonPath2GeoJSONCoords from '../amapPolygonPath2GeoJSONCoords';

// mock LngLat class
class LngLat {
  public className: string;

  public lat: number;

  public lng: number;

  pos: [number, number];

  constructor(lng: number, lat: number) {
    this.lat = lat;
    this.lng = lng;
  }

  public toArray(): [number, number] {
    return [this.lng, this.lat];
  }

  setLng = jest.fn();

  setLat = jest.fn();

  getLng = jest.fn();

  getLat = jest.fn();

  equals = jest.fn();

  add = jest.fn();

  subtract = jest.fn();

  divideBy = jest.fn();

  multiplyBy = jest.fn();

  offset = jest.fn();

  toString = jest.fn();

  toJSON = jest.fn();

  distance = jest.fn();

  distanceTo = jest.fn();
}

// mock AMap api
const AMap = {
  LngLat,
};

describe('amapPolygonPath2GeoJSONCoords', () => {
  test('should convert AMap polygon path to GeoJSON coordinates', () => {
    const amapPath: AMap.LngLat[] = [
      new AMap.LngLat(1, 2),
      new AMap.LngLat(3, 4),
      new AMap.LngLat(5, 6),
    ];
    const expectedCoords: [number, number][] = [
      [1, 2],
      [3, 4],
      [5, 6],
      [1, 2],
    ];
    const result = amapPolygonPath2GeoJSONCoords(amapPath);
    expect(result).toEqual(expectedCoords);
  });

  test('should convert correctly if it is a Polygon that has a hole', () => {
    const amapPolygonWithHolePath: AMap.LngLat[][] = [
      // outer-line
      [
        new AMap.LngLat(0, 0),
        new AMap.LngLat(0, 10),
        new AMap.LngLat(10, 0),
      ],
      // inner-line
      [
        new AMap.LngLat(1, 1),
        new AMap.LngLat(1, 2),
        new AMap.LngLat(2, 1),
      ],
    ];
    const expectedCoords: [number, number][][] = [
      [
        [0, 0],
        [0, 10],
        [10, 0],
        [0, 0],
      ],
      [
        [1, 1],
        [1, 2],
        [2, 1],
        [1, 1],
      ],
    ];
    const result = amapPolygonPath2GeoJSONCoords(amapPolygonWithHolePath);
    expect(result).toEqual(expectedCoords);
  });

  test('should convert correctly if it is a MultiPolygon that has a hole', () => {
    const amapMultiPolygonPath: AMap.LngLat[][][] = [
      // polygon 1
      [
        [
          new AMap.LngLat(0, 0),
          new AMap.LngLat(0, 10),
          new AMap.LngLat(10, 0),
        ],
        [
          new AMap.LngLat(1, 1),
          new AMap.LngLat(1, 2),
          new AMap.LngLat(2, 1),
        ],
      ],
      // polygon 2
      [
        [
          new AMap.LngLat(0, 0),
          new AMap.LngLat(0, 10),
          new AMap.LngLat(10, 0),
        ],
        [
          new AMap.LngLat(1, 1),
          new AMap.LngLat(1, 2),
          new AMap.LngLat(2, 1),
        ],
      ],

    ];
    const expectedCoords: [number, number][][][] = [
      // polygon 1
      [
        [
          [0, 0], [0, 10], [10, 0], [0, 0],
        ],
        [
          [1, 1], [1, 2], [2, 1], [1, 1],
        ],
      ],
      // polygon 2
      [
        [
          [0, 0], [0, 10], [10, 0], [0, 0],
        ],
        [
          [1, 1], [1, 2], [2, 1], [1, 1],
        ],
      ],
    ];
    const result = amapPolygonPath2GeoJSONCoords(amapMultiPolygonPath);
    expect(result).toEqual(expectedCoords);
  });

  test('should handle empty polygon path', () => {
    const emptyPath: ReturnType<AMap.Polygon['getPath']> = [];
    const result = amapPolygonPath2GeoJSONCoords(emptyPath);
    expect(result).toEqual(emptyPath);
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => amapPolygonPath2GeoJSONCoords(undefined as any)).toThrowError('invalid path');
  });
});
