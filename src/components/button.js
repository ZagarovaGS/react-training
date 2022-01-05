import { useState } from 'react';
import './button.css';
import classNames from 'classnames';

export default function Button() {
  let [classNum, setClassNum] = useState(0);
  function changeClasses() {
    if (classNum < 3) {
      console.log(classNum + 1);
      return setClassNum(classNum + 1);
    }
    return setClassNum(0);
  }

  return (
    <button
      className={classNames('button', {
        button_yellow: classNum === 1,
        button_green: classNum === 2,
        button_sienna: classNum === 3,
      })}
      onClick={changeClasses}
    >
      Click me
    </button>
  );
}
