import coordsOfGeoJSON2AMapPolygonPath from '../coordsOfGeoJSON2AMapPolygonPath';

describe('coordsOfGeoJSON2AMapPolygonPath', () => {
  test('should remove the last position point when it is a ring', () => {
    const input: GeoJSON.Position[] = [[1, 2], [3, 4], [5, 6], [1, 2]];
    const output: GeoJSON.Position[] = [[1, 2], [3, 4], [5, 6]];
    expect(coordsOfGeoJSON2AMapPolygonPath(input)).toEqual(output);
  });

  test('should not remove the last position point when it is not a ring line', () => {
    const input: GeoJSON.Position[] = [[1, 2], [3, 4], [5, 6]];
    const output: GeoJSON.Position[] = [[1, 2], [3, 4], [5, 6]];
    expect(coordsOfGeoJSON2AMapPolygonPath(input)).toEqual(output);
  });

  test('should convert GeoJSON.Polygon coordinates', () => {
    const input: GeoJSON.Polygon['coordinates'] = [[[1, 2], [3, 4], [5, 6], [1, 2]]];
    const output: GeoJSON.Polygon['coordinates'] = [[[1, 2], [3, 4], [5, 6]]];
    expect(coordsOfGeoJSON2AMapPolygonPath(input)).toEqual(output);
  });

  test('should convert GeoJSON.MultiPolygon coordinates', () => {
    const input: GeoJSON.MultiPolygon['coordinates'] = [[[[1, 2], [3, 4], [5, 6], [1, 2]]]];
    const output: GeoJSON.MultiPolygon['coordinates'] = [[[[1, 2], [3, 4], [5, 6]]]];
    expect(coordsOfGeoJSON2AMapPolygonPath(input)).toEqual(output);
  });
});
