import React, { useEffect } from "react";
const UseEffectMain = ()=>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('타이머돌아가는중!');
        },1000);
        return ()=>{
            clearInterval(timer);
            console.log('타이머 종료');
        }
    });

    return (
        <div>
            타이머를 시작합니다. f12를 눌러보세요.
        </div>
    )
}

export default UseEffectMain;