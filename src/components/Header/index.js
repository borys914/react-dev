import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeColor } from '../ThemeColor';
import './index.css';

const Header = () => {
  const [themeColor, setThemeColor] = useContext(ThemeColor)
  return(

    <header>
      <div className="site-title"> Meeups </div>
      <div style={{color: themeColor}}>color change</div>
      <ul className="nav-menu">
        <li>
          <Link to='/' className="nav-link">AllMeetups</Link>
        </li>
        <li>
          <Link to='/new-meetup' className="nav-link">NewMeetup</Link>
        </li>
      </ul>
    </header>
  )
}
export default Header