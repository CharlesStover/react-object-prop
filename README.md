![GitHub version](https://img.shields.io/github/package-json/v/CharlesStover/react-object-prop.svg)
![npm version](https://img.shields.io/npm/v/react-object-prop.svg)
![npm downloads](https://img.shields.io/npm/dt/react-object-prop.svg)
![min](https://img.shields.io/bundlephobia/min/react-object-prop.svg)
![minzip](https://img.shields.io/bundlephobia/minzip/react-object-prop.svg)

# react-object-prop
Caches (memoizes) Object props in React so as to prevent unnecessary re-rendering.

## Install
* `npm install react-object-prop --save` or
* `yarn add react-object-prop`

## Use
Import the creator function from the package. Create a caching function _for each prop you want cached_.

Pass the object you want cached to the caching function, instead of as a prop, then pass the result of the caching function as a prop.

If the object did not change since the last time it was passed to the caching function, a cache of the last object will be passed instead, preventing an unnecessary re-render.

## Example
In this minimal example, the objects passed to the `value` exhibit varying stages of cache.

Every time MyComponent renders:
* The first Child component will re-render, because a new object reference will be generated for its `value` prop.
* The second Child component will _not_ re-render, because the caching function will return its last used reference.
* The third Child component will re-render, because the caching function will return a new reference due to the fact that the object has changed.

```JS
import createObjectProp from 'react-object-prop';
const myProp = createObjectProp();
const myOtherProp = createObjectProp();

let CHANGING_VALUE = 1;

class MyComponent extends React.PureComponent {
  render() {
    CHANGING_VALUE++;
    return (
      <div>

        {/* always re-renders */}
        <Child value={{ x: 1, y: 2 }} />

        {/* never re-renders */}
        <Child value={myProp({ x: 3, y: 4 })} />

        {/* always re-renders */}
        <Child value={myOtherProp({ x: 5, y: CHANGING_VALUE })} />
      </div>
    );
  }
}
```

## Real-World Example
In this real-world example that inspired this package, the class names being passed to the Material UI components need to be cached. If the class names do not change, the Material UI components do not need to re-render.

```JS
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React from 'react';
import createObjectProp from 'react-object-prop';
import headerStyles from './header-styles';

class Header extends React.PureComponent {

  constructor(props) {
    super(props);
    this.tabClasses = createObjectProp();
    this.tabsClasses = createObjectProp();
  }

  render() {
    return (
      <Tabs
        centered
        classes={this.tabsClasses({
          flexContainer: this.props.classes.tabsFlexContainer,
          indicator: this.props.classes.indicator,
          root: this.props.classes.tabs,
          scroller: this.props.classes.scroller
        })}
        fullWidth
        value={this.props.tab}
      >
        <Tab
          classes={this.tabClasses({
            label: this.props.classes.label,
            labelContainer: this.props.classes.labelContainer,
            root: this.props.classes.tab,
            selected: this.props.classes.selected,
            wrapper: this.props.classes.tabWrapper
          })}
          disabled={this.props.tab === 'home'}
          label="Home"
          tabIndex={1}
          value="home"
        />
        <Tab
          classes={this.tabClasses}
          disabled={this.props.tab === 'contact'}
          label="Contact"
          tabIndex={2}
          value="contact"
        />
      </Tabs>
    );
  }
}

export default withSTyles(headerStyles)(Header);
```
