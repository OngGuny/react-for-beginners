import { useEffect, useState }  from "react";
import {Button} from './Button';
function App() {
// how to prevent rerender when state change? useStatu is impossible to do that. Because useState rerender( = run every codes in component.js) component when state change. So What?
// -> i want render component only once.
  const [counter,setCounter] = useState(0);

  const onlyOnce = () => {
    console.log('redner once');
  }
  useEffect( () => {
    console.log('redner once');
  },[]);

  const onClick = () => setCounter((prev) => prev +1);
  console.log('render when clicked');
  return (
<div>
  <Button text={'continue'}/>
  <h1>{counter}</h1>
  <button onClick={onClick}>Click Me</button>
</div>
  );
}

export default App;
