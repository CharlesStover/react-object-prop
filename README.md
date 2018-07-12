# react-object-prop
Caches Object props in React so as to prevent unnecessary re-rendering.

## Install
* `npm install react-object-prop --save` or
* `yarn add react-object-prop`

## Use
Import the creator function from the package. Create a caching function _for each prop you want cached_.

Pass the object you want cached to the caching function, instead of as a prop, then pass the result of the caching function as a prop.

If the object did not change since the last time it was passed to the caching function, a cache of the last object will be passed instead, preventing an unnecessary re-render.

```JS
import createObjectProp from 'react-object-prop';
const myProp = createObjectProp();
const myOtherProp = createObjectProp();

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Child prop={myProp({ x: 1, y: 2 })} />
        <Child prop={myOtherProp({ x: 3, y: 4 })} />
      </div>
    );
  }
}
```
