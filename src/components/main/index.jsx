import { useState } from 'react';
import './style.css';

function Counter() {
    const [num , setNum ]=useState(0);

    const addNum = () => setNum (num + 1); 
    const subNum = () => setNum (num - 1); 
    return (
        <div className="container">
            <div className="content">
                <h1>Counter {num}</h1>
                <div className="btns">
                    <button onClick={subNum}
                        className="btn-flip"
                        data-back="-"
                        data-front="subtraction"
                    ></button>
                    <button
                        onClick={addNum}
                        className="btn-flip"
                        data-back="+"
                        data-front="Addiction"
                    ></button>
                </div>
            </div>
            <div className="flap"></div>
        </div>
    );
}

export default Counter;
