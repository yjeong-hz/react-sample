import React, { useEffect, useState } from 'react';

const UseEffectRender = ()=>{

    const [count,setCount ] = useState(1);
    const [name,setName ] = useState('');

    const hadleCountUpdate =()=>{
        console.log('count : ',count);
        setCount(count+1);
    }

    const hadleNameUpdate =(e)=>{
        console.log('name : ',e.target.value);
        setName(e.target.value);
    }
    useEffect(()=>{
        console.log('redering');
    }, [count]);

    return (
        <div>
            UseEffectRender Testing
            <button
            onClick={hadleCountUpdate}
            >update</button>
            <br/>
            <input
            id="inputTest"
            type="text"
            value={name}
            onChange={hadleNameUpdate}
            ></input>
            <span>name:{name}</span>

        </div>
    )
}
export default UseEffectRender;