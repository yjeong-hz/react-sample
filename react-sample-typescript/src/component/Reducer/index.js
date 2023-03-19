import React, { useReducer, useState } from "react";

const reducer = (state, action)=>{
    console.log('reducer야 일해!!', state,action);
    switch (action.type){
        case 'deposit':
            return state+action.payload;
        case 'withdraw':
            return state-action.payload;
        case 'qhrfl':
            return state + (action.payload)*2;
        default:
            return state;
    }
}

const ReducerPrac = ()=>{

    const [number,setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);
    return <div>
        ReducerPrac;
        <h2>Reducer 은행에 오신걸 환영합니다.</h2>
        <p>잔고 : {money}</p>
        <input type="number"
        value={number}
        onChange={(e)=>setNumber(parseInt(e.target.value))}
        step="1000"
        ></input>

        <button
        onClick={()=>{
            dispatch({type:'deposit',payload:number});
        }}
        >예금
        </button>
        <button
        onClick={()=>{
            dispatch({type:'withdraw',payload:number});
        }}
        >출금
        </button>
        <button
        onClick={()=>{
            dispatch({type:'qhrfl',payload:number});
        }}
        >복리
        </button>

    </div>
}

export default ReducerPrac;