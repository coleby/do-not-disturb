import { writeDndPrefs } from './dnd/writeDndPrefs';
import { isEnabled } from './isEnabled';
import { execFile } from './util/execFile';
import { checkOs } from './checkOs';

let didControlCenterReset = false;

/**
 * Disables DnD mode.
 *
 * @return boolean True if DnD was disabled, false on failure
 * */
export const disable = async (): Promise<boolean> => {
  checkOs();

  await writeDndPrefs();

  if (!didControlCenterReset) {
    /**
     * The first time after boot that DND is programatically turned off,
     * the interface doesn’t update until Control Center is restarted.
     * */
    await execFile('/usr/bin/killall', ['ControlCenter']);

    didControlCenterReset = true;
  }

  const enabled = await isEnabled();

  return !enabled;
};
