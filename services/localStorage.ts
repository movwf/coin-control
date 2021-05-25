export const saveStorage = (key, value) => {
  if (typeof window !== "undefined") {
    const updatedValue = { key: value };
    const previousValue = getStorage(key);

    if (previousValue) {
      window.localStorage.setItem(
        key,
        JSON.stringify(Object.assign(previousValue, updatedValue).key)
      );
    } else {
      window.localStorage.setItem(key, JSON.stringify(updatedValue.key));
    }
  } else {
    console.log("Local Storage is not supported.");
  }
};

export const getStorage = (key) => {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem(key));
  } else {
    return null;
  }
};
