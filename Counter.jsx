        

import React, {useState} from 'react';

 function Counter(){
    const [count, setCount] = useState(0);

    function decrease(){
        setCount(count => count - 1);
        setCount(count => count - 1);
        setCount(count => count - 1);

    }
    function reset(){
        setCount(0);
    }
    function increase(){
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
        setCount(count => count + 1);
    }

return(
    <>
     <div>
        <h1>count: {count}</h1>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>Increase</button>
    </div> 
    </>
)
}
export default Counter