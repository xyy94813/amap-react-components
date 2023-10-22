import * as React from 'react';
import { createRef } from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapPolygon from '../AMapPolygon';

const mockInstance = {
  setExtData: jest.fn(),
  setOptions: jest.fn(),
  setExtrusionHeight: jest.fn(),
  setPath: jest.fn(),
  show: jest.fn(),
  hide: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      Polygon: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapPolygon Component', () => {
  const mockPath: [number, number][] = [
    [116.386069, 39.898857],
    [116.386023, 39.897477],
    [116.387719, 39.897539],
  ];
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing: normal polygon', () => {
    expect(() => {
      render(<AMapPolygon path={mockPath} />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('Polygon', expect.any(Function));
  });

  test('renders without crashing: polygon with hole', () => {
    expect(() => {
      render(<AMapPolygon path={[mockPath]} />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('Polygon', expect.any(Function));
  });

  test('renders without crashing: multi-polygon', () => {
    expect(() => {
      render(<AMapPolygon path={[[mockPath]]} />);
    }).not.toThrowError();
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapPolygon path={mockPath} />);
    }).not.toThrowError();
  });

  test('support ref to instance', () => {
    (useAMapPluginInstance as jest.Mock)
      .mockReturnValueOnce(null);
    const $ref = createRef<any>();
    const { rerender } = render(<AMapPolygon path={mockPath} ref={$ref} />);
    expect($ref.current).toBe(null);
    rerender(<AMapPolygon path={mockPath} ref={$ref} />);
    expect($ref.current).toBe(mockInstance);
  });

  test('set ext-data', () => {
    const extData = { id: 1 };
    render(<AMapPolygon path={mockPath} extData={extData} />);

    expect(mockInstance.setExtData).toHaveBeenCalledWith(extData);
  });

  test('set to invisible', () => {
    const { rerender } = render(<AMapPolygon path={mockPath} />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapPolygon path={mockPath} visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('sets options: custom style', () => {
    render(
      <AMapPolygon
        path={mockPath}
        fillColor="yellow"
        fillOpacity={0.5}
        strokeColor="red"
        strokeStyle="dashed"
        strokeOpacity={0.1}
        strokeWeight={20}
        strokeDasharray={[10, 40]}
        roofColor="red"
        wallColor="red"
      />,
    );

    expect(mockInstance.setOptions).toBeCalledWith({
      fillColor: 'yellow',
      fillOpacity: 0.5,
      strokeColor: 'red',
      strokeStyle: 'dashed',
      strokeOpacity: 0.1,
      strokeWeight: 20,
      strokeDasharray: [10, 40],
      roofColor: 'red',
      wallColor: 'red',
    });
  });

  test('sets options: sets draggable', () => {
    render(
      <AMapPolygon
        path={mockPath}
        draggable
      />,
    );

    expect(mockInstance.setOptions).toBeCalledWith({
      draggable: true,
    });
  });

  test('sets options: sets zIndex', () => {
    render(
      <AMapPolygon
        path={mockPath}
        zIndex={10}
      />,
    );

    expect(mockInstance.setOptions).toBeCalledWith({
      zIndex: 10,
    });
  });

  test('sets options: sets bubble', () => {
    render(
      <AMapPolygon
        path={mockPath}
        bubble
      />,
    );

    expect(mockInstance.setOptions).toBeCalledWith({
      bubble: true,
    });
  });

  test('sets options: sets cursor', () => {
    render(
      <AMapPolygon
        path={mockPath}
        cursor="123"
      />,
    );

    expect(mockInstance.setOptions).toBeCalledWith({
      cursor: '123',
    });
  });

  test('sets options: sets zooms', () => {
    render(
      <AMapPolygon
        path={mockPath}
        zooms={[2, 20]}
      />,
    );

    expect(mockInstance.setOptions).toBeCalledWith({
      zooms: [2, 20],
    });
  });

  test('bind event correctly', () => {
    const onHide = jest.fn();
    const onShow = jest.fn();
    const onClick = jest.fn();
    const onDBLClick = jest.fn();
    const onRightClick = jest.fn();
    const onMousedown = jest.fn();
    const onMouseup = jest.fn();
    const onMouseover = jest.fn();
    const onMouseout = jest.fn();
    const onDragstart = jest.fn();
    const onDragging = jest.fn();
    const onDragend = jest.fn();
    const onTouchstart = jest.fn();
    const onTouchmove = jest.fn();
    const onTouchend = jest.fn();

    const { unmount } = render(
      <AMapPolygon
        path={mockPath}
        onHide={onHide}
        onShow={onShow}
        onClick={onClick}
        onDBLClick={onDBLClick}
        onRightClick={onRightClick}
        onMousedown={onMousedown}
        onMouseup={onMouseup}
        onMouseover={onMouseover}
        onMouseout={onMouseout}
        onDragstart={onDragstart}
        onDragging={onDragging}
        onDragend={onDragend}
        onTouchstart={onTouchstart}
        onTouchmove={onTouchmove}
        onTouchend={onTouchend}
      />,
    );

    expect(mockInstance.on).toBeCalledTimes(15);
    expect(mockInstance.on).toBeCalledWith('hide', onHide);
    expect(mockInstance.on).toBeCalledWith('show', onShow);
    expect(mockInstance.on).toBeCalledWith('click', onClick);
    expect(mockInstance.on).toBeCalledWith('dblclick', onDBLClick);
    expect(mockInstance.on).toBeCalledWith('rightclick', onRightClick);
    expect(mockInstance.on).toBeCalledWith('mousedown', onMousedown);
    expect(mockInstance.on).toBeCalledWith('mouseup', onMouseup);
    expect(mockInstance.on).toBeCalledWith('mouseover', onMouseover);
    expect(mockInstance.on).toBeCalledWith('mouseout', onMouseout);
    expect(mockInstance.on).toBeCalledWith('dragstart', onDragstart);
    expect(mockInstance.on).toBeCalledWith('dragging', onDragging);
    expect(mockInstance.on).toBeCalledWith('dragend', onDragend);
    expect(mockInstance.on).toBeCalledWith('touchstart', onTouchstart);
    expect(mockInstance.on).toBeCalledWith('touchmove', onTouchmove);
    expect(mockInstance.on).toBeCalledWith('touchend', onTouchend);

    unmount();

    expect(mockInstance.off).toBeCalledTimes(15);
    expect(mockInstance.off).toBeCalledWith('hide', onHide);
    expect(mockInstance.off).toBeCalledWith('show', onShow);
    expect(mockInstance.off).toBeCalledWith('click', onClick);
    expect(mockInstance.off).toBeCalledWith('dblclick', onDBLClick);
    expect(mockInstance.off).toBeCalledWith('rightclick', onRightClick);
    expect(mockInstance.off).toBeCalledWith('mousedown', onMousedown);
    expect(mockInstance.off).toBeCalledWith('mouseup', onMouseup);
    expect(mockInstance.off).toBeCalledWith('mouseover', onMouseover);
    expect(mockInstance.off).toBeCalledWith('mouseout', onMouseout);
    expect(mockInstance.off).toBeCalledWith('dragstart', onDragstart);
    expect(mockInstance.off).toBeCalledWith('dragging', onDragging);
    expect(mockInstance.off).toBeCalledWith('dragend', onDragend);
    expect(mockInstance.off).toBeCalledWith('touchstart', onTouchstart);
    expect(mockInstance.off).toBeCalledWith('touchmove', onTouchmove);
    expect(mockInstance.off).toBeCalledWith('touchend', onTouchend);
  });
});
