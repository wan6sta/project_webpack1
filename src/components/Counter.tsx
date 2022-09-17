import {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
  const [value, setValue] = useState(0)

  return (
    <div className={classes.button}>
      {value}
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
};

export default Counter;