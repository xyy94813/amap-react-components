export const isLatLng = (p: any): p is AMap.LngLat => !!('lat' in p && 'lng' in p);

export const isLatLngArr = (p: any): p is AMap.LngLat[] => p.every(isLatLng);
