import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'

function Header():JSX.Element{
return (
  <div className='header-wrap'>
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/start">시작하기</Link></li>
    </ul>
  </div>
)
}

export default Header;