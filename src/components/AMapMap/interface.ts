export type AMapMapContextValue = AMap.Map | null;

export type AMapMapProps = {
  center?: [number, number];
  cityName?: string;
  zoom?: number;
  features?: AMap.MapOptions['features'];
};
