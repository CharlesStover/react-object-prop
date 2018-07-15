const createObjectProp = () => {
  let cache = Object.create(null);
  return (obj) => {
    let changed = false;
    const temp = Object.create(null);
    for (const [ key, value ] of Object.entries(obj)) {
      if (
        !Object.prototype.hasOwnProperty.call(cache, key) ||
        cache[key] !== value
      ) {
        changed = true;
      }
      temp[key] = value;
    }
    if (changed) {
      cache = temp;
    }
    return cache;
  };
};

createObjectProp.default = createObjectProp;

module.exports = createObjectProp;
