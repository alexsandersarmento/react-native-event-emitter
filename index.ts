let listenersMap: { [id: string]: ((...params: any[]) => void) } = {};

export const addListener = (eventName: string, listener: (...params: any[]) => void) => {
  listenersMap[eventName] = listener;
};

export const removeListener = (eventName: string) => {
  delete listenersMap[eventName];
};

export const removeAllListeners = () => {
  listenersMap = {};
};

export const notify = <T = any>(eventName: string, ...params: T[]) => {
  const listener = listenersMap[eventName];
  if (!listener) return false;
  listener(...params);
  return true;
};
