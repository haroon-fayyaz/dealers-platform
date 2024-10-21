export const isBrowser = typeof window !== 'undefined';

export const sleep = (secs = 1) =>
  new Promise((resolve) => setTimeout(resolve, secs * 1000));
