import { DndDriver } from '../../types';
import { disable, enable, isEnabled } from '@sindresorhus/do-not-disturb';

export const legacyMacosDndDriver: DndDriver = {
  enable: async () => {
    await enable();

    return isEnabled();
  },
  disable: async () => {
    await disable();

    const enabled = await isEnabled();

    return !enabled;
  },
  isEnabled,
};
