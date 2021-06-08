export interface DndDriver {
  /**
   * Enables DnD mode.
   *
   * @return boolean True on success, false if DnD is not enabled.
   * */
  enable: () => Promise<boolean>;

  /**
   * Disables DnD mode.
   *
   * @return boolean True if DnD was disabled, false on failure
   * */
  disable: () => Promise<boolean>;
  isEnabled: () => Promise<boolean>;
}
