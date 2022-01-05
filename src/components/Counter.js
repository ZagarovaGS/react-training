import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../app/reducers/counter';
import './Counter.css';

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => dispatch(increment())}
        className={count % 2 === 0 ? 'btn btn_green' : 'btn btn_red'}
      >
        +
      </button>
      <button
        className={count % 2 !== 0 ? 'btn btn_green' : 'btn btn_red'}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
