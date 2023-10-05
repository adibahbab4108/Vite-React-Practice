import  { useRef } from 'react';


const useRefExample = () => {
    const getTeg=useRef();

    const changeTeg =()=>{
        getTeg.current.innerText="Testing useRef";

    }
    return (
        <div>
            <h1 ref={getTeg}>Hello Adib</h1>
            <button onClick={changeTeg}>Click Here</button>
        </div>
    );
};

export default useRefExample;