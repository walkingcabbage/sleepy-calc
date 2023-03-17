import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css'

function useScrollDirection(){

  const [scrollDirection, setScrollDirection] = useState<string>('');
  
  useEffect(()=>{
    let lastScrollY = window.pageYOffset;

    const headerHandler = ()=>{
    const scrollY=window.pageYOffset;
    const direction = scrollY > lastScrollY ? "down" : "up";
    if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
      setScrollDirection(direction);
    }
    lastScrollY = scrollY > 0 ? scrollY : 0;
  };



    window.addEventListener('scroll', headerHandler)

    return()=>{
      window.removeEventListener('scroll', headerHandler)
    }
  },[scrollDirection])

  return scrollDirection;
}

function Header():JSX.Element{
  const scrollDirection = useScrollDirection();

return (
  <div className={`header-wrap ${scrollDirection === 'down'?'hide':' '}`}>
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