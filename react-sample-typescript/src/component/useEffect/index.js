import React, {useState} from "react";
import UseEffectMain from "./UseEffectMain";
const UseEffectPractice = ()=>{
    const [showTime, setShowTimer] = useState(false);
    return (
        <div>
            UseEffectPractice
            
            { showTime && <UseEffectMain/> }
            <button
                onClick={()=>setShowTimer(!showTime)}
            >Toggle Timer</button>
        </div>
    )
}

export default UseEffectPractice;