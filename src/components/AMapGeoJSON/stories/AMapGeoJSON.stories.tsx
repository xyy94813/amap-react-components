import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
// import { actions } from '@storybook/addon-actions';

import { AMapGeoJSON, AMapGeoJSONGetOverlayCallback, AMapGeoJSONProps } from 'index';
import { withAMapContainer } from '../../AMapMap/stories/AMapMap.stories';

import useAMap from '../../../hooks/useAMap';

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

const AMapAutoFitView: FC<{
  delay?: number;
}> = ({ delay }) => {
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
};

AMapAutoFitView.defaultProps = {
  delay: 2000,
};

export default {
  title: 'Components/Overlay/AMapGeoJSON',
  decorators: [withAMapContainer],
  argTypes: {
    geoJSON: {
      description: '要加载的标准 GeoJSON 对象',
      type: { name: 'other', value: '', required: true },
      table: {
        type: {
          summary: 'GeoJSON',
          detail: 'AMap 暂时不支持 `Feature`，需要转换成 `FeatureCollection`',
        },
      },
    },
    getMarker: {
      description: '指定点要素的绘制方式，缺省时为 Marker 的默认样式。',
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
    getPolyline: {
      description: '指定点要素的绘制方式，缺省时为 Polyline 的默认样式。',
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
    getPolygon: {
      description: '指定点要素的绘制方式，缺省时为 Polygon 的默认样式。',
      table: {
        type: {
          summary:
            '(geojson?: GeoJSON.GeoJSON, lnglat?: GeoJSON.Point, map?: AMap.Map | null, AMap?: AMap.AMap) => AMap.Overlay',
        },
      },
    },
  },
} as Meta;

const Template: Story<AMapGeoJSONProps> = (args) => (
  <>
    <AMapGeoJSON {...args} />
    <AMapAutoFitView />
  </>
);

export const WithGeoJSON = Template.bind({});
WithGeoJSON.args = {
  geoJSON: mockData,
};

const getMarker: AMapGeoJSONGetOverlayCallback = (_, lnglat, map, AMap) => {
  const options = {
    position: lnglat as AMap.MarkerOptions['position'],
    map: map!,
    label: {
      offset: [],
      direction: 'Top',
      content: 'MyMarker',
    },
  };
  return new AMap!.Marker(options);
};

const getPolyline: AMapGeoJSONGetOverlayCallback = (_, lnglat, map, AMap) => {
  const options = {
    path: lnglat as AMap.PolylineOptions['path'],
    map,
    strokeColor: 'red',
  };
  return new AMap!.Polyline(options);
};

const getPolygon: AMapGeoJSONGetOverlayCallback = (_, lnglat, map, AMap) => {
  const options = {
    path: lnglat as AMap.PolygonOptions['path'],
    map,
    strokeColor: 'yellow',
  };
  return new AMap!.Polygon(options);
};

export const CustomOverlay = Template.bind({});
CustomOverlay.args = {
  geoJSON: mockData,
  getMarker,
  getPolyline,
  getPolygon,
};
