import {isObject} from 'lodash';

export const updateStore = (state = {}, payload) => {
  return !payload
    ? state
    : typeof payload === 'function'
    ? payload(state)
    : isObject(payload)
    ? {
        ...state,
        ...payload,
      }
    : state;
};
