const dispatch = (store) => {
  localStorage.setItem("store", JSON.stringify(store));
};

const subscribe = () => {
  return JSON.parse(localStorage.getItem("store"));
};

const createIdx = () => {
  if (subscribe()) {
    const store = subscribe();
    if (store.length === 0) return 0;
    const idxArray = [];
    store.forEach((item) => {
      idxArray.push(item.idx);
    });
    const max = idxArray.reduce((previous, current = 0) => {
      return previous > current ? previous : current;
    });
    return max + 1;
  } else {
    return 0;
  }
};

export { dispatch, subscribe, createIdx };