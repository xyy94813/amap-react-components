import { useEffect, useContext } from 'react';

import AMapOverlayGroupContext from '../components/AMapOverlayGroup/AMapOverlayGroupContext';
import useAMap from './useAMap';

/**
 * 将 overlay 绑定至 OverlayGroup 或直接绑定至 Map
 *
 * @param overlay
 */
const useAMapOverlayBinder = (overlay: any) => {
  const overlayGroup = useContext(AMapOverlayGroupContext);
  const { map } = useAMap();

  useEffect(() => {
    let clearEffect;
    if (!overlay) return clearEffect;

    // 上下文中有
    if (overlayGroup) {
      overlayGroup.addOverlay(overlay);
      clearEffect = () => {
        try {
          // trick way
          overlayGroup.removeOverlay(overlay);
        } catch (error) {
          // undo anything
        }
      };
    } else if (map) {
      map.add(overlay);

      clearEffect = () => {
        try {
          // trick way
          map.remove(overlay);
        } catch (error) {
          // undo anything
        }
      };
    }

    return clearEffect;
  }, [overlay, map, overlayGroup]);
};

export default useAMapOverlayBinder;
