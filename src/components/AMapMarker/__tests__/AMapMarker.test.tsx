import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import AMapMarker from '../AMapMarker';

const mockInstance = {
  setTitle: jest.fn(),
  setIcon: jest.fn(),
  setLabel: jest.fn(),
  setClickable: jest.fn(),
  setDraggable: jest.fn(),
  setCursor: jest.fn(),
  setExtData: jest.fn(),
  setAnchor: jest.fn(),
  setOffset: jest.fn(),
  setAngle: jest.fn(),
  setSize: jest.fn(),
  setzIndex: jest.fn(),
  setContent: jest.fn(),
  show: jest.fn(),
  hide: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      Marker: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapMarker Component', () => {
  const mockPosition: [number, number] = [118, 23];
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without crashing', () => {
    expect(() => {
      render(<AMapMarker position={mockPosition} />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toHaveBeenCalledWith('Marker', expect.any(Function));
  });

  test('renders without crashing when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapMarker position={mockPosition} />);
    }).not.toThrowError();
  });

  test('set title', () => {
    render(<AMapMarker position={mockPosition} title="123" />);

    expect(mockInstance.setTitle).toHaveBeenCalledWith('123');
  });

  test('set icon', () => {
    const icon = '';
    render(<AMapMarker position={mockPosition} icon={icon} />);

    expect(mockInstance.setIcon).toHaveBeenCalledWith(icon);
  });

  test('set label', () => {
    const label = {
      content: '123',
      offset: [0, 10],
      direction: 'center',
    };
    render(<AMapMarker position={mockPosition} label={label as AMap.MarkerOptions['label']} />);

    expect(mockInstance.setLabel).toHaveBeenCalledWith(label);
  });

  test('set clickable', () => {
    render(<AMapMarker position={mockPosition} clickable />);

    expect(mockInstance.setClickable).toHaveBeenCalledWith(true);
  });

  test('set draggable', () => {
    render(<AMapMarker position={mockPosition} draggable />);

    expect(mockInstance.setDraggable).toHaveBeenCalledWith(true);
  });

  test('set cursor', () => {
    render(<AMapMarker position={mockPosition} cursor="" />);

    expect(mockInstance.setCursor).toHaveBeenCalledWith('');
  });

  test('set ext-data', () => {
    const extData = { id: 1 };
    render(<AMapMarker position={mockPosition} extData={extData} />);

    expect(mockInstance.setExtData).toHaveBeenCalledWith(extData);
  });

  test('set anchor', () => {
    render(<AMapMarker position={mockPosition} anchor="center" />);

    expect(mockInstance.setAnchor).toHaveBeenCalledWith('center');
  });

  test('set offset', () => {
    const offset: [number, number] = [1, 1];
    render(<AMapMarker position={mockPosition} offset={offset} />);

    expect(mockInstance.setOffset).toHaveBeenCalledWith(offset);
  });

  test('set angle', () => {
    render(<AMapMarker position={mockPosition} angle={45} />);

    expect(mockInstance.setAngle).toHaveBeenCalledWith(45);
  });

  test('set size', () => {
    const size: [number, number] = [1, 1];
    render(<AMapMarker position={mockPosition} size={size} />);

    expect(mockInstance.setSize).toHaveBeenCalledWith(size);
  });

  test('set z-index', () => {
    render(<AMapMarker position={mockPosition} zIndex={2} />);

    expect(mockInstance.setzIndex).toHaveBeenCalledWith(2);
  });

  test('set content', () => {
    render(<AMapMarker position={mockPosition} content="content" />);

    expect(mockInstance.setContent).toHaveBeenCalledWith('content');
  });

  test('set to invisible', () => {
    const { rerender } = render(<AMapMarker position={mockPosition} />);

    expect(mockInstance.show).toBeCalled();

    rerender(<AMapMarker position={mockPosition} visible={false} />);

    expect(mockInstance.hide).toBeCalled();
  });

  test('bind event correctly', () => {
    const onShow = jest.fn();
    const onHide = jest.fn();
    const onClick = jest.fn();
    const onDBLClick = jest.fn();
    const onRightClick = jest.fn();
    const onMousemove = jest.fn();
    const onMousedown = jest.fn();
    const onMouseup = jest.fn();
    const onMouseover = jest.fn();
    const onMouseout = jest.fn();
    const onTouchstart = jest.fn();
    const onTouchmove = jest.fn();
    const onTouchend = jest.fn();
    const onDragstart = jest.fn();
    const onDragging = jest.fn();
    const onDragend = jest.fn();
    const onMoving = jest.fn();
    const onMoveEnd = jest.fn();
    const onMoveAlong = jest.fn();

    const { unmount } = render(
      <AMapMarker
        position={mockPosition}
        onShow={onShow}
        onHide={onHide}
        onClick={onClick}
        onDBLClick={onDBLClick}
        onRightClick={onRightClick}
        onMousemove={onMousemove}
        onMousedown={onMousedown}
        onMouseup={onMouseup}
        onMouseover={onMouseover}
        onMouseout={onMouseout}
        onTouchstart={onTouchstart}
        onTouchmove={onTouchmove}
        onTouchend={onTouchend}
        onDragstart={onDragstart}
        onDragging={onDragging}
        onDragend={onDragend}
        onMoving={onMoving}
        onMoveEnd={onMoveEnd}
        onMoveAlong={onMoveAlong}
      />,
    );

    expect(mockInstance.on).toBeCalledTimes(19);
    expect(mockInstance.on).toBeCalledWith('show', onShow);
    expect(mockInstance.on).toBeCalledWith('hide', onHide);
    expect(mockInstance.on).toBeCalledWith('click', onClick);
    expect(mockInstance.on).toBeCalledWith('dblclick', onDBLClick);
    expect(mockInstance.on).toBeCalledWith('rightclick', onRightClick);
    expect(mockInstance.on).toBeCalledWith('mousemove', onMousemove);
    expect(mockInstance.on).toBeCalledWith('mousedown', onMousedown);
    expect(mockInstance.on).toBeCalledWith('mouseup', onMouseup);
    expect(mockInstance.on).toBeCalledWith('mouseover', onMouseover);
    expect(mockInstance.on).toBeCalledWith('mouseout', onMouseout);
    expect(mockInstance.on).toBeCalledWith('touchstart', onTouchstart);
    expect(mockInstance.on).toBeCalledWith('touchmove', onTouchmove);
    expect(mockInstance.on).toBeCalledWith('touchend', onTouchend);
    expect(mockInstance.on).toBeCalledWith('dragstart', onDragstart);
    expect(mockInstance.on).toBeCalledWith('dragging', onDragging);
    expect(mockInstance.on).toBeCalledWith('dragend', onDragend);
    expect(mockInstance.on).toBeCalledWith('moving', onMoving);
    expect(mockInstance.on).toBeCalledWith('moveend', onMoveEnd);
    expect(mockInstance.on).toBeCalledWith('movealong', onMoveAlong);

    unmount();

    expect(mockInstance.on).toBeCalledTimes(19);
    expect(mockInstance.off).toBeCalledWith('show', onShow);
    expect(mockInstance.off).toBeCalledWith('hide', onHide);
    expect(mockInstance.off).toBeCalledWith('click', onClick);
    expect(mockInstance.off).toBeCalledWith('dblclick', onDBLClick);
    expect(mockInstance.off).toBeCalledWith('rightclick', onRightClick);
    expect(mockInstance.off).toBeCalledWith('mousemove', onMousemove);
    expect(mockInstance.off).toBeCalledWith('mousedown', onMousedown);
    expect(mockInstance.off).toBeCalledWith('mouseup', onMouseup);
    expect(mockInstance.off).toBeCalledWith('mouseover', onMouseover);
    expect(mockInstance.off).toBeCalledWith('mouseout', onMouseout);
    expect(mockInstance.off).toBeCalledWith('touchstart', onTouchstart);
    expect(mockInstance.off).toBeCalledWith('touchmove', onTouchmove);
    expect(mockInstance.off).toBeCalledWith('touchend', onTouchend);
    expect(mockInstance.off).toBeCalledWith('dragstart', onDragstart);
    expect(mockInstance.off).toBeCalledWith('dragging', onDragging);
    expect(mockInstance.off).toBeCalledWith('dragend', onDragend);
    expect(mockInstance.off).toBeCalledWith('moving', onMoving);
    expect(mockInstance.off).toBeCalledWith('moveend', onMoveEnd);
    expect(mockInstance.off).toBeCalledWith('movealong', onMoveAlong);
  });
});
