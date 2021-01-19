// Live Demo: https://jsfiddle.net/en5cz64x/
import React from 'react'

function App() {
  const ref = React.createRef();

  const onChange = (e) => {
    ref.current.funcInChild(e);
  };

  return (
    <div>
      <Child ref={ref} />
      <input onChange={onChange} placeholder="Enter to change State"/>
    </div>
  );
}

const Child = React.forwardRef((props, ref) => {
  const [state, setState] = React.useState();

  React.useImperativeHandle(ref, () => ({
    funcInChild(e) {
      onChange(e.target.value);
    },
  }));

  const onChange = (value) => {
    setState(value);
  };

  return <p>State: {state}</p>;
});

export default App;
