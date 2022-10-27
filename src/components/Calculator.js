import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { output: '0' };
    this.obj = { total: null, next: null, operation: null };
  }

  clickHandler = (event) => {
    const btnClick = event.target.innerHTML;
    this.obj = calculate(this.obj, btnClick);
    this.setState({ output: this.obj.next || this.obj.total || '0' });
  }

  render() {
    const { output } = this.state;
    return (
      <table role="grid" className="calc-wrapper">
        <thead>
          <th className="display" colSpan="4">{output}</th>
        </thead>
        <tbody>
          <tr className="wrapper">
            <td role="gridcell" onClick={this.clickHandler} className="row">AC</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">+/-</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">%</td>
            <td role="gridcell" onClick={this.clickHandler} className="row-ll">+</td>
          </tr>
          <tr className="wrapper">
            <td role="gridcell" onClick={this.clickHandler} className="row">7</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">8</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">9</td>
            <td role="gridcell" onClick={this.clickHandler} className="row-l">*</td>
          </tr>
          <tr className="wrapper">
            <td role="gridcell" onClick={this.clickHandler} className="row">4</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">5</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">6</td>
            <td role="gridcell" onClick={this.clickHandler} className="row-l">-</td>
          </tr>
          <tr className="wrapper">
            <td role="gridcell" onClick={this.clickHandler} className="row">1</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">2</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">3</td>
            <td role="gridcell" onClick={this.clickHandler} className="row-l">+</td>
          </tr>
          <tr className="wrapper">
            <td role="gridcell" onClick={this.clickHandler} className="row" colSpan="2">0</td>
            <td role="gridcell" onClick={this.clickHandler} className="row">/-</td>
            <td role="gridcell" onClick={this.clickHandler} className="row-l">=</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default Calculator;
