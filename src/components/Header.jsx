import logo from '../assets/images/logo.svg';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logo Kasa" className="main_logo" />
        <Navbar />
      </header>
    </>
  );
};
