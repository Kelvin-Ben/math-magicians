import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [output, setoutput] = useState('0');
  const [summation, setsummation] = useState({ total: null, next: null, summation: null });

  const clickHandler = (event) => {
    const btnClick = event.target.innerHTML;
    setsummation(calculate(summation, btnClick));
    const obj = calculate(summation, btnClick);
    setoutput(obj.next || obj.total || '0');
  };

  return (
    <table role="grid" className="calc-wrapper">
      <thead>
        <th className="display" colSpan="4">{output}</th>
      </thead>
      <tbody>
        <tr className="wrapper">
          <td role="gridcell" onClick={clickHandler} className="row">AC</td>
          <td role="gridcell" onClick={clickHandler} className="row">+/-</td>
          <td role="gridcell" onClick={clickHandler} className="row">%</td>
          <td role="gridcell" onClick={clickHandler} className="row-ll">+</td>
        </tr>
        <tr className="wrapper">
          <td role="gridcell" onClick={clickHandler} className="row">7</td>
          <td role="gridcell" onClick={clickHandler} className="row">8</td>
          <td role="gridcell" onClick={clickHandler} className="row">9</td>
          <td role="gridcell" onClick={clickHandler} className="row-l">*</td>
        </tr>
        <tr className="wrapper">
          <td role="gridcell" onClick={clickHandler} className="row">4</td>
          <td role="gridcell" onClick={clickHandler} className="row">5</td>
          <td role="gridcell" onClick={clickHandler} className="row">6</td>
          <td role="gridcell" onClick={clickHandler} className="row-l">-</td>
        </tr>
        <tr className="wrapper">
          <td role="gridcell" onClick={clickHandler} className="row">1</td>
          <td role="gridcell" onClick={clickHandler} className="row">2</td>
          <td role="gridcell" onClick={clickHandler} className="row">3</td>
          <td role="gridcell" onClick={clickHandler} className="row-l">+</td>
        </tr>
        <tr className="wrapper">
          <td role="gridcell" onClick={clickHandler} className="row" colSpan="2">0</td>
          <td role="gridcell" onClick={clickHandler} className="row">/-</td>
          <td role="gridcell" onClick={clickHandler} className="row-l">=</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Calculator;
