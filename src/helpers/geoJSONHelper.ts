export const isPosition = (pos: any): pos is GeoJSON.Position => (
  Array.isArray(pos)
      && pos.length === 2
      && typeof pos[0] === 'number'
      && typeof pos[1] === 'number'
);

export const isLineCoords = (
  line: any,
): line is GeoJSON.Position[] => Array.isArray(line) && line.every(isPosition);
