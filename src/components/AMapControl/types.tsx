export interface ControlPositionObject {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export enum ControlPositionEnum {
  LT = 'LT', // 左上角
  RT = 'RT', // 右上角
  LB = 'LB', // 左下角
  RB = 'RB', // 右下角
}

export type ControlPosition = ControlPositionEnum | ControlPositionObject;

export interface AMapControlConfig {
  position?: ControlPosition;
  offset?: [number, number];
}
