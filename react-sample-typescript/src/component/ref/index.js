import React, {useState, useRef} from "react";

const RefPractice = ()=>{

    const refTest = useRef(0);
    const [rederer, setRenderer] = useState(0);

    const increateRef =()=>{
        console.log('increateRef', refTest.current);
        refTest.current = refTest.current+ 1;
    }

    const increateRenderer =()=>{
        console.log('increateRenderer :', rederer);
        setRenderer(rederer+1);
    }

    return(
        <div>RefPractice<br/>
        <div>renderer:{rederer}</div>
        <div>ref:{refTest.current}</div>
        <button onClick={increateRef}>Ref increate</button>
        <button onClick={increateRenderer}>increateRederer button</button>
        </div>
    )
}

export default RefPractice;