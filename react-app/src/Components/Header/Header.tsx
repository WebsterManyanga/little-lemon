import './Header.css';
import logo from '../../images/Asset 14@4x.png';

export default function Header() {
  return (
    <header className="top">
      <img 
        src={logo} 
        alt="logo"
        className="top__logo"
      />
      <nav className="top__nav">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Book</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    </header>
  )
}