import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <>
      <header>
        <Link to={'/housings'}>
          <img src={logo} alt="Logo Kasa" className="main_logo" />
        </Link>
        <Navbar />
      </header>
    </>
  );
};
