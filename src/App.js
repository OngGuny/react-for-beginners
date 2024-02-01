import { useEffect, useState }  from "react";

function App() {
// how to prevent rerender when state change? useStatu is impossible to do that. Because useState rerender( = run every codes in component.js) component when state change. So What?
// -> i want render component only once.
  const [counter,setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');

  const onChange = (event) =>
    setKeyword(event.target.value);
    console.log('redner once when rerender.');
 useEffect(() => {
    console.log('redner once when counter changed.');
  },[counter]);
  useEffect( () => {
    console.log('redner once, cause empty array = no dependancy... read docs..., watch nothing');
  },[]);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
      console.log('log when keyword change'+ keyword);

    }
  },[keyword])
  const onClick = () => setCounter((prev) => prev +1);

  console.log('onRerender , i\'m in component' );
  return (
<div>
  <input
  value={keyword}
  onChange={onChange}
  type="text"
  placeholder="Search here.."
  />
  <h1>{counter}</h1>
  <button onClick={onClick}>Click Me</button>
</div>
  );
}

export default App;
