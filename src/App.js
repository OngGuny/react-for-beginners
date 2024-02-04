import { useEffect, useState }  from "react";

function Hello() {
  // useEffect( () => {
// console.log('When showing, Im logged.');
// Important useEffect 안에서 함수를 반환하는게, clean up. 컴포넌트가 언마운트 될 때, 실행하도록 하는 함수.
// return () => console.log('Clean up! when un showing.');
  // }, [])
  // return <h1>Hellooo</h1>
//  이건 아래의 모양과 같은로직이다. 

function byFunction() {
  console.log('bye');
}

const hiFunction = () => {
  console.log('Hi~');
  return byFunction;
}

useEffect(hiFunction,[]);
return <h1>Hellooo</h1> 
//근데 클린업 펑션은 잘 사용하지 않는다...
//특정한 케이스에만 사용........ 
//그리고 보통은 useEffect 안에다가 코드작성한다.
 //함수따로 안만들고
}


function App  () {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev)=>!prev);

  return (
<div>
  {showing ? <Hello/> : null}
  <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
</div>
  );
}

export default App;
