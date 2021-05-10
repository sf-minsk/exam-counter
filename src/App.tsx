import React, {useState} from 'react';

import './App.css';
import {Num} from './Num';
import {NumPlus} from "./NumPlus";
import {NumRefresh} from "./NumRefresh";

function App() {
    const [num, setNum] = useState<number>(0)
    const numPlus = () => setNum(() => {let a:number;a = num;return (++a)})
    return (
        <div className="App">
            <div className="numBlock">
                <Num num={num}/>
            </div>
            <div className="buttonBlock">
                <NumPlus numPlus={numPlus} num={num}/>
                <NumRefresh setNum={setNum} num={num}/>
            </div>
        </div>
    );
}
export default App;
