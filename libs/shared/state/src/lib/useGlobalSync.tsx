import { useSyncExternalStore } from 'react';
import { globalStore } from './store';

const useGlobalSync = () => {
  const store = useSyncExternalStore(
    globalStore.subscribe,
    globalStore.getSnapshot,
    globalStore.getServerSnapshot
  );

  return {
    store
   };
};

export default useGlobalSync;