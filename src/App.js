/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculatorpage from './pages/calculatorpage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculatorpage" element={<Calculatorpage />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}
export default App;
