declare module '@sindresorhus/do-not-disturb' {
  export function enable(): Promise<void>;

  export function disable(): Promise<void>;

  export function isEnabled(): Promise<boolean>;
}
