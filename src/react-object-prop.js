const createObjectProp = () => {
  let cache = Object.create(null);
  let cacheLength = 0;
  return obj => {
    const objKeys = Object.keys(obj);
    const objLength = objKeys.length;

    // If the objects have a different number of keys, they are different.
    // Update the cache.
    if (objLength !== cacheLength) {
      cache = {...obj};
      cacheLength = objLength;
    }

    // If the objects have the same number of keys, check each one individually.
    else {
      for (const key of objKeys) {

        // If any of the properties differ, update the cache and stop checking.
        if (cache[key] !== obj[key]) {
          cache = {...obj};
          break;
        }
      }
    }
    return cache;
  };
};

createObjectProp.default = createObjectProp;

module.exports = createObjectProp;
