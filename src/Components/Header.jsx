import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Me
        </Link>,
        <Link key={3} className="nav-link text-light" to="/portfolio">
        Portfolio
      </Link>
      ]}
    />
  );
}