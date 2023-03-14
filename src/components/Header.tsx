import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'
function Header():JSX.Element{
return (
  <div className='header-wrap'>
    <div className='logo'>
      <img src={require('../assets/img/iconmonstr-weather-111-240.png')} alt="" />
      <h1>Good Sleep</h1>
    </div>
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/start">시작하기</Link></li>
    </ul>
  </div>
)
}

export default Header;