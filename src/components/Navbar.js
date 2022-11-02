import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <h1 className="title">Math Magicians</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Calculatorpage">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </ul>
    </nav>
  );
}
