import {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className={classes.title} onClick={() => setCount(count + 1)}>{count}</h1>
        </div>
    );
};

export default Counter;