import { getDndPrefs } from './dnd/getDndPrefs';
import { checkOs } from './checkOs';

export const isEnabled = async (): Promise<boolean> => {
  checkOs();

  const dndPrefs = await getDndPrefs();

  return Boolean(dndPrefs?.userPref?.enabled);
};
