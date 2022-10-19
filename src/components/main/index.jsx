import { useState } from 'react';
import './style.css';
import { GiLightBulb } from "react-icons/gi";

function Counter() {
    const [num, setNum] = useState(0);

    const addNum = () => setNum(num + 1);
    const subNum = () => setNum(num - 1);
    const [isLit, setLit] = useState(true)

    const toggle = () => setLit(!isLit)

    return (


        <div className={(isLit) ? 'container' : 'container1'}>

            <div className={(isLit) ? 'content' : 'content1'}>

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

            <div className='fBtn'>
                <button className={(isLit) ? 'tBtn' : 'tBtn1'} onClick={toggle}><GiLightBulb /></button>
            </div>


        </div>





    );
}

export default Counter;
