import React from "react";

const TestPractice = (props)=>{
    console.log('TestPractice:',props.nameValue)
    return (
        <>
            <h1>{props.nameValue}안녕하세요</h1>
            <div>넌 누구니??!!</div>
            
        </>
    )
}

export default TestPractice;