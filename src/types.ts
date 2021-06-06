export interface NcPrefsContents {
  dnd_prefs?: Buffer;
}

export interface DndPrefs {
  userPref?: {
    enabled?: boolean;
    date?: Date;
    reason?: 0 | 1;
  };
}
