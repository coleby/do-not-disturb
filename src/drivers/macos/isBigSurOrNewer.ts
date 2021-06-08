import semverParse from 'semver/functions/parse';
import os from 'os';

export const isBigSurOrNewer = () => {
  const result = semverParse(os.release());

  if (!result) {
    throw new TypeError('Failed to parse OS version.');
  }

  return result.major >= 20;
};
