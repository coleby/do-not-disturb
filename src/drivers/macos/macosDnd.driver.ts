import { DndDriver } from '../../types';
import { enable } from './enable';
import { disable } from './disable';
import { isEnabled } from './isEnabled';

export const macosDndDriver: DndDriver = {
  enable,
  disable,
  isEnabled,
};
