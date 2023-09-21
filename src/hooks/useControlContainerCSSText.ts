const formatPX = (val: number | string) => `${encodeURIComponent(val)}px`;

const useControlContainerCSSText = (
  position: AMap.ControlConfig['position'],
  offset = [10, 10],
) => {
  if (position === 'LT') {
    return `left:${formatPX(offset[0])};top:${formatPX(offset[1])};`;
  }
  if (position === 'RT') {
    return `right:${formatPX(offset[0])};top:${formatPX(offset[1])};`;
  }
  if (position === 'LB') {
    return `left:${formatPX(offset[0])};bottom:${formatPX(offset[1])};`;
  }
  if (position === 'RB') {
    return `right:${formatPX(offset[0])};bottom:${formatPX(offset[1])};`;
  }
  if (typeof position === 'object') {
    // 保证了 position 中的 key 顺序不相同也有同样的结果，避免重复更新
    return ['top', 'right', 'bottom', 'left'].reduce((result, key) => {
      const value = position[key];
      if (!value) return result;
      return `${result}${key}:${formatPX(value!)};`;
    }, '');
  }
  return '';
};

export default useControlContainerCSSText;
