import { writeDndPrefs } from './dnd/writeDndPrefs';
import { isEnabled } from './isEnabled';
import { checkOs } from './checkOs';

/**
 * Enables DnD mode.
 *
 * @return boolean True on success, false if DnD is not enabled.
 * */
export const enable = async (): Promise<boolean> => {
  checkOs();

  await writeDndPrefs({
    userPref: {
      date: new Date(),
      enabled: true,
      reason: 1,
    },
  });

  return isEnabled();
};
