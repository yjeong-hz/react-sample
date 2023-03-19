import React from "react";

const HelloPractice = (props)=>{
    console.log('HelloPractice:',props.nameValue)
    return (
        <>
            <h1>{props.nameValue}HelloPractice</h1>
            
        </>
    )
}

export default HelloPractice;