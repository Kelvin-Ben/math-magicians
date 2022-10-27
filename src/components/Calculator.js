import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <table className="calc-wrapper">
        <thead>
          <th className="display" colSpan="4">0</th>
        </thead>
        <tbody>
          <tr className="wrapper">
            <td className="row">AC</td>
            <td className="row">+/-</td>
            <td className="row">%</td>
            <td className="row-ll">+</td>
          </tr>
          <tr className="wrapper">
            <td className="row">7</td>
            <td className="row">8</td>
            <td className="row">9</td>
            <td className="row-l">*</td>
          </tr>
          <tr className="wrapper">
            <td className="row">4</td>
            <td className="row">5</td>
            <td className="row">6</td>
            <td className="row-l">-</td>
          </tr>
          <tr className="wrapper">
            <td className="row">1</td>
            <td className="row">2</td>
            <td className="row">3</td>
            <td className="row-l">+</td>
          </tr>
          <tr className="wrapper">
            <td className="row" colSpan="2">0</td>
            <td className="row">/-</td>
            <td className="row-l">=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Calculator;
