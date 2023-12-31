import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyle} to={'/housings'} end>
        Accueil
      </NavLink>
      <NavLink style={navLinkStyle} to={'/about'}>
        À propos
      </NavLink>
    </nav>
  );
};
