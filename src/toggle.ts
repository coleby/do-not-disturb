import { isEnabled } from './isEnabled';
import { disable } from './disable';
import { enable } from './enable';

/**
 * Toggles DnD mode.
 *
 * @return boolean True if DnD was successfuly toggled, false on failure.
 * */
export const toggle = async () => {
  const enabled = await isEnabled();

  return enabled ? disable() : enable();
};
