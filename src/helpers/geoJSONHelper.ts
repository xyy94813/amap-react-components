export const isPosition = (pos: any): pos is GeoJSON.Position => (
  Array.isArray(pos)
      && pos.length === 2
      && typeof pos[0] === 'number'
      && typeof pos[1] === 'number'
);

export const isLineCoords = (
  line: any,
): line is GeoJSON.Position[] => Array.isArray(line) && line.length >= 2 && line.every(isPosition);

export const isSamePosition = (positionA: GeoJSON.Position, positionB: GeoJSON.Position) => {
  if (!isPosition(positionA) || !isPosition(positionB)) {
    throw Error('invalid position');
  }

  return positionA === positionB || positionA.toString() === positionB.toString();
};

export const isRingLineCoords = (coords: GeoJSON.Position[]) => {
  if (!isLineCoords(coords)) return false;
  const coordsLen = coords.length;
  const firstPosition = coords[0];
  const lastPosition = coords[coordsLen - 1];
  return coordsLen > 3 && isSamePosition(firstPosition, lastPosition);
};
