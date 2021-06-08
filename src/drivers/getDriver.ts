import * as os from 'os';
import { isBigSurOrNewer } from './macos/isBigSurOrNewer';
import { macosDndDriver } from './macos/macosDnd.driver';
import { legacyMacosDndDriver } from './macos/legacyMacosDnd.driver';

export const getDriver = () => {
  if (os.type() !== 'Darwin') {
    throw new Error('This module is only supported on Darwin!');
  }

  return isBigSurOrNewer() ? macosDndDriver : legacyMacosDndDriver;
};
