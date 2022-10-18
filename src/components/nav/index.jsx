import { useState } from 'react';
import './style.css';

function NavBar() {
    const [isLit, setLit] = useState(true)

    const toggle = () => setLit(!isLit)

    console.log = 'toggle'
    return (
        <div className="nav">
            <h1 className={(isLit) ? 'light' : 'dark'}>khan {(isLit) ? 'light' : 'dark'}</h1>
            <button onClick={toggle}>sssssssss</button>

        </div>
    );
}

export default NavBar;
