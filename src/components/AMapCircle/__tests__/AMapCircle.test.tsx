import * as React from 'react';
import { createRef } from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapCircle from '../AMapCircle';

const mockInstance = {
  setCenter: jest.fn(),
  setRadius: jest.fn(),
  setOptions: jest.fn(),
  setExtData: jest.fn(),
  show: jest.fn(),
  hide: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      Circle: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapCircle Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapCircle />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('Circle', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapCircle />);
    }).not.toThrowError();
  });

  test('support ref to instance', () => {
    (useAMapPluginInstance as jest.Mock)
      .mockReturnValueOnce(null);
    const $ref = createRef<any>();
    const { rerender } = render(<AMapCircle ref={$ref} />);
    expect($ref.current).toBe(null);
    rerender(<AMapCircle ref={$ref} />);
    expect($ref.current).toBe(mockInstance);
  });

  test('sets the circle center and radius', () => {
    const center: [number, number] = [116.397428, 39.90923];
    const radius = 1000;

    render(<AMapCircle center={center} radius={radius} />);

    expect(mockInstance.setCenter).toHaveBeenCalledWith(center);
    expect(mockInstance.setRadius).toHaveBeenCalledWith(radius);
  });

  test('sets the extra data', () => {
    const extData = { id: 1 };
    render(<AMapCircle extData={extData} />);

    expect(mockInstance.setExtData).toHaveBeenCalledWith(extData);
  });

  test('set to invisible', () => {
    const { rerender } = render(<AMapCircle />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapCircle visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('updates options when props change', () => {
    const zIndex = 1;
    const bubble = false;
    const cursor = '1';
    const fillColor = '#ffffff';
    const fillOpacity = 1;
    const strokeColor = '#000000';
    const strokeStyle = 'solid';
    const strokeOpacity = 1;
    const strokeWeight = 1;
    const strokeDasharray: [number, number] = [10, 40];
    const draggable = false;

    const { rerender } = render(
      <AMapCircle
        zIndex={zIndex}
        bubble={bubble}
        cursor={cursor}
        fillColor={fillColor}
        fillOpacity={fillOpacity}
        strokeColor={strokeColor}
        strokeStyle={strokeStyle}
        strokeOpacity={strokeOpacity}
        strokeWeight={strokeWeight}
        strokeDasharray={strokeDasharray}
        draggable={draggable}
      />,
    );

    expect(mockInstance.setOptions).toHaveBeenCalledWith({
      zIndex,
      bubble,
      cursor,
      fillColor,
      fillOpacity,
      strokeColor,
      strokeStyle,
      strokeOpacity,
      strokeWeight,
      strokeDasharray,
      draggable,
    });

    const newFillColor = '#00ff00';
    const newStrokeColor = '#ffff00';

    rerender(
      <AMapCircle
        zIndex={zIndex}
        bubble={undefined}
        cursor={undefined}
        fillColor={newFillColor}
        fillOpacity={fillOpacity}
        strokeColor={newStrokeColor}
        strokeStyle={strokeStyle}
        strokeOpacity={strokeOpacity}
        strokeWeight={strokeWeight}
        strokeDasharray={strokeDasharray}
        draggable={draggable}
      />,
    );

    expect(mockInstance.setOptions).toHaveBeenCalledWith({
      zIndex,
      //   bubble,
      //   cursor,
      fillColor: newFillColor,
      fillOpacity,
      strokeColor: newStrokeColor,
      strokeStyle,
      strokeOpacity,
      strokeWeight,
      strokeDasharray,
      draggable,
    });
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

    const { unmount } = render(<AMapCircle
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
    />);

    expect(mockInstance.on).toBeCalledTimes(12);
    expect(mockInstance.on).toHaveBeenCalledWith('show', onShow);
    expect(mockInstance.on).toHaveBeenCalledWith('hide', onHide);
    expect(mockInstance.on).toHaveBeenCalledWith('click', onClick);
    expect(mockInstance.on).toHaveBeenCalledWith('dblclick', onDBLClick);
    expect(mockInstance.on).toHaveBeenCalledWith('rightclick', onRightClick);
    expect(mockInstance.on).toHaveBeenCalledWith('mousedown', onMousedown);
    expect(mockInstance.on).toHaveBeenCalledWith('mouseup', onMouseup);
    expect(mockInstance.on).toHaveBeenCalledWith('mouseover', onMouseover);
    expect(mockInstance.on).toHaveBeenCalledWith('mouseout', onMouseout);
    expect(mockInstance.on).toHaveBeenCalledWith('touchstart', onTouchstart);
    expect(mockInstance.on).toHaveBeenCalledWith('touchmove', onTouchmove);
    expect(mockInstance.on).toHaveBeenCalledWith('touchend', onTouchend);

    unmount();

    expect(mockInstance.off).toBeCalledTimes(12);
    expect(mockInstance.off).toHaveBeenCalledWith('show', onShow);
    expect(mockInstance.off).toHaveBeenCalledWith('hide', onHide);
    expect(mockInstance.off).toHaveBeenCalledWith('click', onClick);
    expect(mockInstance.off).toHaveBeenCalledWith('dblclick', onDBLClick);
    expect(mockInstance.off).toHaveBeenCalledWith('rightclick', onRightClick);
    expect(mockInstance.off).toHaveBeenCalledWith('mousedown', onMousedown);
    expect(mockInstance.off).toHaveBeenCalledWith('mouseup', onMouseup);
    expect(mockInstance.off).toHaveBeenCalledWith('mouseover', onMouseover);
    expect(mockInstance.off).toHaveBeenCalledWith('mouseout', onMouseout);
    expect(mockInstance.off).toHaveBeenCalledWith('touchstart', onTouchstart);
    expect(mockInstance.off).toHaveBeenCalledWith('touchmove', onTouchmove);
    expect(mockInstance.off).toHaveBeenCalledWith('touchend', onTouchend);
  });
});
