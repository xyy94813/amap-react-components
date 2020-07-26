import React, { useEffect, useState } from 'react';
// import { actions } from '@storybook/addon-actions';

import useAMap from '../../../hooks/useAMap';
import createAMapAPIContainer from '../../AMapAPIContainer/createAMapAPIContainer';
import { AMapMap } from '../../AMapMap';

import AMapGeoJSON, { AMapGeoJSONGetOverlayCallback } from '../AMapGeoJSON';

const APIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY as string,
});

const mockData: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'GeometryCollection',
        geometries: [
          {
            type: 'Point',
            coordinates: [116.39, 39.9],
          },
          {
            type: 'Polygon',
            coordinates: [
              [
                [116.384595, 39.901321],
                [116.383526, 39.899865],
                [116.386284, 39.900917],
              ],
              [
                [116.384594, 39.901],
                [116.384, 39.9003],
                [116.3861, 39.900917],
              ],
            ],
          },
          {
            type: 'LineString',
            coordinates: [
              [116.388904, 39.903423],
              [116.392122, 39.901176],
            ],
          },
        ],
      },
    },
  ],
};

const getMarker: AMapGeoJSONGetOverlayCallback = (geojson, lnglat, map, AMap) => {
  const options = {
    position: lnglat,
    map,
  };
  return new AMap.Marker(options);
};

const getPolyline: AMapGeoJSONGetOverlayCallback = (geojson, lnglat, map, AMap) => {
  const options = {
    path: lnglat,
    map,
  };
  return new AMap.Polyline(options);
};

const getPolygon: AMapGeoJSONGetOverlayCallback = (geojson, lnglat, map, AMap) => {
  const options = {
    path: lnglat,
    map,
  };
  return new AMap.Polygon(options);
};

interface AMapAutoFitViewProps {
  delay?: number;
}

function AMapAutoFitView({ delay = 2000 }: AMapAutoFitViewProps) {
  const { map } = useAMap();
  const [fitViewed, setFitViewed] = useState(false);
  useEffect(() => {
    let clearEffect;
    if (fitViewed) {
      return clearEffect;
    }
    const timeoutKey = setTimeout(() => {
      if (map) {
        map.setFitView();
        setFitViewed(true);
      }
    }, delay);
    clearEffect = () => {
      global.clearTimeout(timeoutKey);
    };
    return clearEffect;
  }, [delay, map, fitViewed]);

  return null;
}

export const Async = () => (
  <APIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap>
        <AMapGeoJSON
          geoJSON={mockData}
          getMarker={getMarker}
          getPolyline={getPolyline}
          getPolygon={getPolygon}
        />
        <AMapAutoFitView />
      </AMapMap>
    </div>
  </APIContainer>
);

const SyncAPIContainer = createAMapAPIContainer({
  version: '2.0',
  apiKey: process.env.STORYBOOK_AMAP_API_KEY as string,
  plugins: ['AMap.GeoJSON'],
});

export const Sync = () => (
  <SyncAPIContainer>
    <div style={{ height: 'calc(100vh - 8px * 2)' }}>
      <AMapMap>
        <AMapGeoJSON
          geoJSON={mockData}
          getMarker={getMarker}
          getPolyline={getPolyline}
          getPolygon={getPolygon}
        />
        <AMapAutoFitView />
      </AMapMap>
    </div>
  </SyncAPIContainer>
);

export default {
  title: 'AMapGeoJSON',
};
