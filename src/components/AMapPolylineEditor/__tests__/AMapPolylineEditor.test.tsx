import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import useAMap from '../../../hooks/useAMap';
import useAMapPluginInstance from '../../../hooks/useAMapPluginInstance';

import { AMapPolylineEditor } from '../../../index';

const mockMapInstance = {
  on: jest.fn(),
  off: jest.fn(),
  getAllOverlays: jest.fn(),
};

const mockContext = {
  __AMAP__: null,
  __AMAP_UI__: null,
  map: mockMapInstance,
};

jest.mock('../../../hooks/useAMap', () => ({
  esModule: true,
  default: jest.fn(() => mockContext),
}));

const mockInstance = {
  setTarget: jest.fn(),
  on: jest.fn(),
  off: jest.fn(),
  open: jest.fn(),
  close: jest.fn(),
};

jest.mock('../../../hooks/useAMapPluginInstance', () => ({
  esModule: true,
  default: jest.fn((__, cb) => {
    cb({
      PolylineEditor: jest.fn(),
    }, {});
    return mockInstance;
  }),
}));

describe('AMapPolylineEditor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(cleanup);

  test('renders without error', () => {
    expect(() => {
      render(<AMapPolylineEditor computeTarget={jest.fn()} />);
    }).not.toThrowError();
    expect(useAMapPluginInstance).toBeCalledWith('PolylineEditor', expect.any(Function));
  });

  test('renders without error when map instance is null', () => {
    (useAMap as jest.Mock).mockReturnValueOnce({});
    expect(() => {
      render(<AMapPolylineEditor computeTarget={jest.fn()} />);
    }).not.toThrowError();
  });

  test('renders without error when instance is null', () => {
    (useAMapPluginInstance as jest.Mock).mockReturnValueOnce(null);
    expect(() => {
      render(<AMapPolylineEditor computeTarget={jest.fn()} />);
    }).not.toThrowError();
  });

  test('sets target correctly', () => {
    const computeTarget = jest.fn((arr) => arr?.[0]);
    const mockOverlays = [{}];
    mockMapInstance.getAllOverlays.mockReturnValueOnce(mockOverlays);
    render(<AMapPolylineEditor computeTarget={computeTarget} />);
    expect(mockMapInstance.getAllOverlays).toBeCalledWith('polyline');
    expect(computeTarget).toBeCalledWith(mockOverlays);
    expect(mockInstance.setTarget).toBeCalledWith(mockOverlays[0]);
  });

  test('sets target correctly when map.getAllOverlays returns an empty array', () => {
    const computeTarget = jest.fn((arr) => arr?.[0]);
    mockMapInstance.getAllOverlays.mockReturnValueOnce([]);
    render(<AMapPolylineEditor computeTarget={computeTarget} />);
    expect(mockMapInstance.getAllOverlays).toBeCalledWith('polyline');
    expect(computeTarget).toBeCalledWith([]);
    expect(mockInstance.setTarget).toBeCalledWith(null);
  });

  test('sets target correctly when map.getAllOverlays returns null', () => {
    const computeTarget = jest.fn((arr) => arr?.[0]);
    mockMapInstance.getAllOverlays.mockReturnValueOnce(null);
    render(<AMapPolylineEditor computeTarget={computeTarget} />);
    expect(mockMapInstance.getAllOverlays).toBeCalledWith('polyline');
    expect(computeTarget).toBeCalledWith([]);
    expect(mockInstance.setTarget).toBeCalledWith(null);
  });

  test('triggers onChange correctly', () => {
    const onChange = jest.fn();
    const computeTarget = jest.fn();
    const eventRepo = new Map<string, Set<Function>>();
    mockInstance.on.mockImplementation((type, cb) => {
      if (!eventRepo.has(type)) {
        eventRepo.set(type, new Set());
      }
      eventRepo.get(type)!.add(cb);
    });
    mockInstance.off.mockImplementation((type, cb) => {
      if (!eventRepo.has(type)) return;
      eventRepo.get(type)!.delete(cb);
    });

    const { rerender } = render(
      <AMapPolylineEditor computeTarget={computeTarget} onChange={onChange} />,
    );

    const mockEvent = {};
    eventRepo.get('add')?.forEach((fn) => fn(mockEvent));
    eventRepo.get('addnode')?.forEach((fn) => fn(mockEvent));
    eventRepo.get('adjust')?.forEach((fn) => fn(mockEvent));
    eventRepo.get('removenode')?.forEach((fn) => fn(mockEvent));
    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toBeCalledWith(mockEvent);

    rerender(<AMapPolylineEditor computeTarget={computeTarget} onChange={undefined} />);

    // 未设置 onChange
    eventRepo.get('add')?.forEach((fn) => fn(mockEvent));
    // reset mock
    mockMapInstance.on.mockReset();
    // Write your test code here
  });

  test('closes and opens correctly', () => {
    // Test case 1: disabled is true, curInstance.close() is called
    const computeTarget = jest.fn();
    const { rerender } = render(<AMapPolylineEditor computeTarget={computeTarget} />);
    expect(mockInstance.open).toHaveBeenCalled();
    // Test case 2: disabled is false, curInstance.open() is called
    rerender(<AMapPolylineEditor disabled computeTarget={computeTarget} />);
    // Write your test code here
    expect(mockInstance.close).toHaveBeenCalled();
  });

  test('bind and unbind events correctly', () => {
    const computeTarget = jest.fn();
    const { unmount } = render(<AMapPolylineEditor computeTarget={computeTarget} />);
    expect(mockInstance.on).toBeCalledWith('add', expect.any(Function));
    expect(mockInstance.on).toBeCalledWith('addnode', expect.any(Function));
    expect(mockInstance.on).toBeCalledWith('adjust', expect.any(Function));
    expect(mockInstance.on).toBeCalledWith('removenode', expect.any(Function));

    unmount();

    expect(mockInstance.off).toBeCalledWith('add', expect.any(Function));
    expect(mockInstance.off).toBeCalledWith('addnode', expect.any(Function));
    expect(mockInstance.off).toBeCalledWith('adjust', expect.any(Function));
    expect(mockInstance.off).toBeCalledWith('removenode', expect.any(Function));
  });

  test('polyline added or removed then re-compute target', () => {
    const computeTarget = jest.fn();
    const eventRepo = new Map<string, Set<Function>>();
    mockMapInstance.on.mockImplementation((type, cb) => {
      if (!eventRepo.has(type)) {
        eventRepo.set(type, new Set());
      }
      eventRepo.get(type)!.add(cb);
    });
    render(<AMapPolylineEditor computeTarget={computeTarget} />);

    // modified overlay is not polyline
    eventRepo.get('overlaysRemoved')?.forEach((fn) => fn([{ className: 'Overlay.Polygon' }]));
    expect(computeTarget).toBeCalledTimes(1); // not called again

    const mockEvent = { className: 'Overlay.Polyline' };
    eventRepo.get('overlaysAdded')?.forEach((fn) => fn(mockEvent));
    expect(computeTarget).toBeCalledTimes(2);
    eventRepo.get('overlaysRemoved')?.forEach((fn) => fn([mockEvent, { className: 'Overlay.Polygon' }]));
    expect(computeTarget).toBeCalledTimes(3);

    // reset mock
    mockMapInstance.on.mockReset();
  });
});
