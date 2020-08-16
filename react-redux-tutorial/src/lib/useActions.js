import { bindActionCreators } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/redux';
import { useDispatch } from 'C:/Users/kuuha/AppData/Local/Yarn/Data/global/node_modules/react-redux';
import { useMemo } from 'react';

export default function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
      }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : deps
  );
}
