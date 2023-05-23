const listenersMap: { [id: string]: Array<(...params: any[]) => void> } = {};

export const addListener = (eventName: string, listener: (...params: any[]) => void) => {
  listenersMap[eventName] = listenersMap[eventName] || [];
  listenersMap[eventName].push(listener);
};

export const removeListener = (eventName: string, listener: (...params: any[]) => void) => {
  const lis = listenersMap[eventName];
  if (!lis) return;

  for (let i = lis.length - 1; i >= 0; i--) {
    if (lis[i] === listener) {
      lis.splice(i, 1);
      break;
    }
  }
};

export const removeAllListeners = (eventName: string) => {
  listenersMap[eventName] = [];
};

export const notify = <T = any>(eventName: string, ...params: T[]) => {
  const listeners = listenersMap[eventName];
  if (!listeners) return false;
  listeners.forEach(fnc => {
    fnc(...params);
  });
  return true;
};