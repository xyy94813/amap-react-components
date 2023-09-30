import useControlContainerCSSText from '../useControlContainerCSSText';

describe('useControlContainerCSSText', () => {
  test('should return the correct CSS text for position "LT"', () => {
    const cssText = useControlContainerCSSText('LT');
    expect(cssText).toBe('left:10px;top:10px;');
  });

  test('should return the correct CSS text for position "RT"', () => {
    const cssText = useControlContainerCSSText('RT');
    expect(cssText).toBe('right:10px;top:10px;');
  });

  test('should return the correct CSS text for position "LB"', () => {
    const cssText = useControlContainerCSSText('LB', [10, 10]);
    expect(cssText).toBe('left:10px;bottom:10px;');
  });

  test('should return the correct CSS text for position "RB"', () => {
    const cssText = useControlContainerCSSText('RB');
    expect(cssText).toBe('right:10px;bottom:10px;');
  });

  test('should return the correct CSS text with custom offset', () => {
    const cssText = useControlContainerCSSText('RB', [20, 20]);
    expect(cssText).toBe('right:20px;bottom:20px;');
  });

  test('should return the correct CSS text for custom position object', () => {
    const position = {
      top: '10',
      right: '20',
      bottom: '30',
      left: '40',
    };
    const cssText = useControlContainerCSSText(position, [10, 10]);
    expect(cssText).toBe('top:10px;right:20px;bottom:30px;left:40px;');
  });

  test('should return an empty string for unknown position', () => {
    const cssText = useControlContainerCSSText('unknown' as any, [10, 10]);
    expect(cssText).toBe('');
  });

  test('should return an empty string for invalid position object', () => {
    const position = {};
    const cssText = useControlContainerCSSText(position, [10, 10]);
    expect(cssText).toBe('');
  });
});
