/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';
import AMapGeoJSON from '../AMapGeoJSON';

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      GeoJSON: jest.fn(),
    }, {});
  }),
}));

describe('AMapGeoJSON', () => {
  const point: GeoJSON.Point = {
    type: 'Point',
    coordinates: [116.39, 39.9],
  };

  const line: GeoJSON.LineString = {
    type: 'LineString',
    coordinates: [
      [116.388904, 39.903423],
      [116.392122, 39.901176],
    ],
  };

  const commonPolygon: GeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [
      [
        [116.386069, 39.898857],
        [116.386023, 39.897477],
        [116.387719, 39.897539],
        [116.386069, 39.898857],
      ],
    ],
  };
  const polygonWithHole: GeoJSON.Polygon = {
    type: 'Polygon',
    coordinates: [
      [
        [116.384595, 39.901321],
        [116.383526, 39.899865],
        [116.386284, 39.900917],
        [116.384595, 39.901321],
      ],
      [
        [116.384594, 39.901],
        [116.384, 39.9003],
        [116.3861, 39.900917],
        [116.384594, 39.901],
      ],
    ],
  };
  const multiPolygon: GeoJSON.MultiPolygon = {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [116.388624, 39.900055],
          [116.390452, 39.898583],
          [116.391294, 39.900003],
          [116.388624, 39.900055],
        ],
        [
          [116.389113, 39.899924],
          [116.390251, 39.898962],
          [116.391055, 39.899899],
          [116.389113, 39.899924],
        ],
      ],
      [
        [
          [116.387884, 39.899645],
          [116.38796, 39.898347],
          [116.390175, 39.898394],
          [116.387884, 39.899645],
        ],
      ],
    ],
  };

  const mockData: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'GeometryCollection',
          geometries: [
            point,
            line,
            commonPolygon,
            polygonWithHole,
            multiPolygon,
          ],
        },
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render without error', () => {
    expect(() => {
      render(<AMapGeoJSON geoJSON={mockData} />);
    }).not.toThrow();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('GeoJSON', expect.any(Function));
  });

  test('should render without error when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      const options = {};
      render(<AMapGeoJSON geoJSON={mockData} options={options} />);
    }).not.toThrow();
  });

  test('import data correctly', () => {
    const mockInstance = {
      _opts: {},
      importData: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);
    const { rerender } = render(<AMapGeoJSON geoJSON={mockData} />);

    expect(mockInstance.importData).toHaveBeenCalledTimes(1);
    expect(mockInstance.importData).toHaveBeenCalledWith(mockData);

    const newData = { ...mockData };

    rerender(<AMapGeoJSON geoJSON={{ ...mockData }} />);

    expect(mockInstance.importData).toHaveBeenCalledTimes(2);
    expect(mockInstance.importData).toHaveBeenCalledWith(newData);
  });

  test('custom render function', () => {
    const mockInstance = {
      _opts: {} as any,
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(mockInstance);
    const getMarker = jest.fn();
    const getPolyline = jest.fn();
    const getPolygon = jest.fn();

    render(
      <AMapGeoJSON
        geoJSON={mockData}
        getMarker={getMarker}
        getPolyline={getPolyline}
        getPolygon={getPolygon}
      />,
    );

    expect(typeof mockInstance._opts.getMarker).toBe('function');
    expect(typeof mockInstance._opts.getPolyline).toBe('function');
    expect(typeof mockInstance._opts.getPolygon).toBe('function');
  });

  test('should set options', () => {
    const mockInstance = {
      _opts: {},
      setOptions: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(mockInstance);
    const options = {};

    render(<AMapGeoJSON geoJSON={mockData} options={options} />);

    expect(mockInstance.setOptions).toHaveBeenCalledTimes(1);
    expect(mockInstance.setOptions).toHaveBeenCalledWith(options);
  });

  test('set to invisible', () => {
    const mockInstance = {
      _opts: {},
      show: jest.fn(),
      hide: jest.fn(),
    };
    (useAMapPluginInstance as jest.Mock).mockReturnValue(mockInstance);

    const { rerender } = render(<AMapGeoJSON geoJSON={mockData} />);

    expect(mockInstance.show).toBeCalled();

    rerender(
      <AMapGeoJSON geoJSON={mockData} visible={false} />,
    );
    expect(mockInstance.hide).toBeCalled();
  });
});
