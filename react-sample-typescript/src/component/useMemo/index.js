import React, {useState, useMemo} from "react";


const UseMemoPractice=()=>{
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);
    
    const easyCalculator = (number)=>{
        console.log('정말 쉬운계산기');
        return number*5;
    }

    const hardCalculator = (number)=>{
        for(let i=0; i<99; i++){
            // console.log("i : ",i);
        }
        console.log('정말 어려운 계산기');
        return number+1000;
    }

    const easySum = easyCalculator(easyNumber);
    // const hardSum = hardCalculator(hardNumber);
    const hardSum = useMemo(()=>{
            return hardCalculator(hardNumber);
    }, [hardNumber]);

    return(
        <div>
            UseMemoPractice<br/>
            <h3>어려운 계산기</h3>
            <input
            type="number"
            value={hardNumber}
            onChange={(e)=>setHardNumber(parseInt(e.target.value))}
            ></input>
            <span> +1000 = {hardSum}</span>

            <h3>쉬운계산기</h3>
            <input
            type="number"
            value={easyNumber}
            onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
            ></input>
            <span> X 5 = {easySum}</span>
        </div>
    );
}

export default UseMemoPractice;