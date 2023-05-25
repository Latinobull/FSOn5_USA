import { useState } from 'react';
import styles from '../styles/CalculatorApp.module.css';

export default function CalculatorApp() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleClick = value => {
    setExpression(prevExpression => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div className={styles.calculator}>
        <input
          type="text"
          value={expression}
          placeholder="Enter an expression"
          readOnly
          className={styles.expressionInput}
        />
        <input
          type="text"
          value={result}
          placeholder="Result"
          readOnly
          className={styles.resultInput}
        />

        <div className={styles.buttons}>
          <button className={styles.btn} onClick={() => handleClick('1')}>
            1
          </button>
          <button className={styles.btn} onClick={() => handleClick('2')}>
            2
          </button>
          <button className={styles.btn} onClick={() => handleClick('3')}>
            3
          </button>
          <button className={styles.btn} onClick={() => handleClick('+')}>
            +
          </button>
          <button className={styles.btn} onClick={() => handleClick('4')}>
            4
          </button>
          <button className={styles.btn} onClick={() => handleClick('5')}>
            5
          </button>
          <button className={styles.btn} onClick={() => handleClick('6')}>
            6
          </button>
          <button className={styles.btn} onClick={() => handleClick('-')}>
            -
          </button>
          <button className={styles.btn} onClick={() => handleClick('7')}>
            7
          </button>
          <button className={styles.btn} onClick={() => handleClick('8')}>
            8
          </button>
          <button className={styles.btn} onClick={() => handleClick('9')}>
            9
          </button>
          <button className={styles.btn} onClick={() => handleClick('*')}>
            *
          </button>
          <button className={styles.btn} onClick={() => handleClick('0')}>
            0
          </button>
          <button className={styles.btn} onClick={() => handleClick('.')}>
            .
          </button>
          <button className={styles.btn} onClick={handleCalculate}>
            =
          </button>

          <button className={styles.btn} onClick={() => handleClick('/')}>
            /
          </button>
          <button className={styles.btn} onClick={handleClear}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}
