import { useEffect } from "react";

  interface props{
    how:string;
    howH:Function;
    hours:string;
    hoursH:Function;
    minute:string;
    minuteH:Function;
    ampm:string;
    ampmH:Function;
  }

function SelectTime({how,howH,hours,hoursH,minute,minuteH,ampm,ampmH}:props){

  

  useEffect(()=>{

  },[])
  const howHandler = (event:any)=>{
    howH(event.target.value)
  }
  const hoursHandler = (event:any)=>{
    hoursH(event.target.value)
  }
  const minuteHandler = (event:any)=>{
    minuteH(event.target.value)
  }
  const ampmHandler = (event:any)=>{
    ampmH(event.target.value)
  }
  return (
    <div>
      <div className="logo-wrapper">
        <img src={require('../assets/img/iconmonstr-weather-111-240.png')} alt="" />
      </div>
      {/* 기상시간 취침시간 선택 */}
      <div className="how-wrapper">
        <select onChange={howHandler} value={how} name="" id="">
          <option value="wakeup" >기상시간</option>
          <option value="fallsleep">취침시간</option>
        </select>
      </div>
      <div className="title">
        { how === 'wakeup' ? '언제  기상하고 싶으세요?' : how === 'fallsleep' ? '언제 취침하실 예정이세요?': null }
      </div>
      {/* 시간 선택 */}
      <div className="when-wrapper">
        <select onChange={hoursHandler} value={hours} name="hours" id="">
          <option value="selectH" >Select Hours</option>
          <option value='1' >1</option>
          <option value='2' >2</option>
          <option value='3' >3</option>
          <option value='4' >4</option>
          <option value='5' >5</option>
          <option value='6' >6</option>
          <option value='7' >7</option>
          <option value='8' >8</option>
          <option value='9' >9</option>
          <option value='10' >10</option>
          <option value='11' >11</option>
          <option value='12' >12</option>
        </select>
        {/* 분 선택 */}
        <select onChange={minuteHandler} value={minute} name="minutes" id="">
          <option value="selectM" >Select Minutes</option>
          <option value='00' >00</option>
          <option value='05' >05</option>
          <option value='10' >10</option>
          <option value='15' >15</option>
          <option value='20' >20</option>
          <option value='25' >25</option>
          <option value='30' >30</option>
          <option value='35' >35</option>
          <option value='40' >40</option>
          <option value='45' >45</option>
          <option value='50' >50</option>
          <option value='55' >55</option>
        </select>
        {/* AMPM선택 */}
        <select onChange={ampmHandler} value={ampm} name="ampm" id="">
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
      
    </div>
  )
  }
  
  export default SelectTime;