import os from 'os';

export const checkOs = () => {
  if (os.type() !== 'Darwin') {
    throw new Error('This module is only supported on Darwin!');
  }
};
