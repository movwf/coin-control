export const saveStorage = (key, value) => {
  const updatedValue = { key: value };
  const previousValue = getStorage(key);

  if (previousValue) {
    localStorage.setItem(
      key,
      JSON.stringify(Object.assign(previousValue, updatedValue).key)
    );
  } else {
    localStorage.setItem(key, JSON.stringify(updatedValue.key));
  }
};

export const getStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
