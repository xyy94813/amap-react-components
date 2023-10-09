import * as React from 'react';
import { createRef } from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapOverlayGroup from '../AMapOverlayGroup';

const mockInstance = {
  show: jest.fn(),
  hide: jest.fn(),
  setOptions: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      OverlayGroup: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapOverlayGroup Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without error', () => {
    expect(() => {
      render(<AMapOverlayGroup />);
    }).not.toThrow();
    // 如果没有抛出错误，测试通过
    expect(useAMapPluginInstance).toHaveBeenCalledWith('OverlayGroup', expect.any(Function));
  });

  test('renders without error when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapOverlayGroup options={{}} />);
    }).not.toThrowError();
  });

  test('set to invisible', () => {
    const { rerender } = render(
      <AMapOverlayGroup />,
    );
    expect(mockInstance.show).toBeCalledTimes(1);

    rerender(<AMapOverlayGroup visible={false} />);
    expect(mockInstance.hide).toBeCalledTimes(1);
  });

  test('sets options', () => {
    const options = {};
    render(<AMapOverlayGroup options={options} />);
    expect(mockInstance.setOptions).toBeCalledWith(options);
  });

  test('renders children', () => {
    const { getByText } = render(
      <AMapOverlayGroup>
        <div>Child Component</div>
      </AMapOverlayGroup>,
    );

    getByText('Child Component');
  });

  test('bind event correctly', () => {
    const onShow = jest.fn();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const onDBLClick = jest.fn();
    const onRightClick = jest.fn();
    const onMousedown = jest.fn();
    const onMouseup = jest.fn();
    const onMouseover = jest.fn();
    const onMouseout = jest.fn();
    const onTouchstart = jest.fn();
    const onTouchmove = jest.fn();
    const onTouchend = jest.fn();

    const { unmount } = render(
      <AMapOverlayGroup
        onShow={onShow}
        onHide={onHide}
        onClick={onClick}
        onDBLClick={onDBLClick}
        onRightClick={onRightClick}
        onMousedown={onMousedown}
        onMouseup={onMouseup}
        onMouseover={onMouseover}
        onMouseout={onMouseout}
        onTouchstart={onTouchstart}
        onTouchmove={onTouchmove}
        onTouchend={onTouchend}
      />,
    );

    expect(mockInstance.on).toBeCalledTimes(12);
    expect(mockInstance.on).toBeCalledWith('show', onShow);
    expect(mockInstance.on).toBeCalledWith('hide', onHide);
    expect(mockInstance.on).toBeCalledWith('click', onClick);
    expect(mockInstance.on).toBeCalledWith('dblclick', onDBLClick);
    expect(mockInstance.on).toBeCalledWith('rightclick', onRightClick);
    expect(mockInstance.on).toBeCalledWith('mousedown', onMousedown);
    expect(mockInstance.on).toBeCalledWith('mouseup', onMouseup);
    expect(mockInstance.on).toBeCalledWith('mouseover', onMouseover);
    expect(mockInstance.on).toBeCalledWith('mouseout', onMouseout);
    expect(mockInstance.on).toBeCalledWith('touchstart', onTouchstart);
    expect(mockInstance.on).toBeCalledWith('touchmove', onTouchmove);
    expect(mockInstance.on).toBeCalledWith('touchend', onTouchend);

    unmount();

    expect(mockInstance.off).toBeCalledTimes(12);
    expect(mockInstance.off).toBeCalledWith('show', onShow);
    expect(mockInstance.off).toBeCalledWith('hide', onHide);
    expect(mockInstance.off).toBeCalledWith('click', onClick);
    expect(mockInstance.off).toBeCalledWith('dblclick', onDBLClick);
    expect(mockInstance.off).toBeCalledWith('rightclick', onRightClick);
    expect(mockInstance.off).toBeCalledWith('mousedown', onMousedown);
    expect(mockInstance.off).toBeCalledWith('mouseup', onMouseup);
    expect(mockInstance.off).toBeCalledWith('mouseover', onMouseover);
    expect(mockInstance.off).toBeCalledWith('mouseout', onMouseout);
    expect(mockInstance.off).toBeCalledWith('touchstart', onTouchstart);
    expect(mockInstance.off).toBeCalledWith('touchmove', onTouchmove);
    expect(mockInstance.off).toBeCalledWith('touchend', onTouchend);
  });

  test('support ref to instance', () => {
    const $ref = createRef<any>();
    render(<AMapOverlayGroup ref={$ref} />);
    expect($ref.current).toBe(mockInstance);
  });
});
