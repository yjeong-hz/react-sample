import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TestPractice from './component/test';
import HelloPractice from './component/hello';
import UseEffectPractice from './component/useEffect';
import UseEffectRender from './component/useEffectRender';
import UseMemoPractice from './component/useMemo';
import RefPractice from './component/ref'
import ReducerPrac from './component/Reducer'
import { ThemeContext } from './component/Context/ThemeContext';
import ContextPractice from './component/Context';
function App() {

  // const [name,setName] =useState('최이정')
  return (
    <div className="App test">
      <header className="App-header">
        hello BTC!!
        {/* <TestPractice nameValue={name}/>
        <HelloPractice nameValue={name}/>
        <TestPractice nameValue={name}/> */}
        {/* <UseEffectRender/> */}
        {/* <UseMemoPractice/> */}
        {/* <RefPractice/> */}
        {/* <ReducerPrac/> */}
        {/* <ContextPractice/> */}
      </header>
    </div>
  );
}

export default App;
