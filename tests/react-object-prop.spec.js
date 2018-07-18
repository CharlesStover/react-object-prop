const createObjectProp = require('./react-object-prop');

describe('react-object-prop', () => {

  it('should return an old reference if values stay the same', () => {
    const prop = createObjectProp();
    const prop1 = prop({ x: 1 });
    const prop2 = prop({ x: 1 });
    if (prop1 !== prop2) {
      throw new Error('Prop changed.');
    }
  });

  it('should return a new reference if keys change', () => {
    const prop = createObjectProp();
    const prop1 = prop({ x: 1 });
    const prop2 = prop({ y: 1 });
    if (prop1 === prop2) {
      throw new Error('Prop did not change.');
    }
  });

  it('should return a new reference if values change', () => {
    const prop = createObjectProp();
    const prop1 = prop({ x: 1 });
    const prop2 = prop({ x: 2 });
    if (prop1 === prop2) {
      throw new Error('Prop did not change.');
    }
  });
});
