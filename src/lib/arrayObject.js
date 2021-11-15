export const getObjectItem = (data = {}, selector = '') => {
  const type = typeof selector;
  if (type === 'string') {
    return data?.[selector];
  }
  if (type === 'function') {
    return selector(data);
  }
  return null;
};

export const formatArray = data => (Array.isArray(data) ? data : []);
