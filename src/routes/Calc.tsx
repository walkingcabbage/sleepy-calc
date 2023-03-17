import '../assets/styles/Calc.css'
import SelectTime from '../components/SelectTime';
import CalcBtns from '../components/CalcBtns';
import { useState } from 'react';
import Result from '../components/Result';
// import { useEffect } from "react";
// import dayjs from "dayjs";

enum howEnum{
  wakeup='wakeup',
  fallsleep='fallsleep'
}
enum ampmEnum{
  am='am',
  pm='pm'
}
enum hoursEnum{
  h1='1',
  h2='2',
  h3='3',
  h4='4',
  h5='5',
  h6='6',
  h7='7',
  h8='8',
  h9='9',
  h10='10',
  h11='11',
  h12='12',
  selectH='selectH',
}
enum minuteEnum{
  m00='00',
  m05='05',
  m10='10',
  m15='15',
  m20='20',
  m25='25',
  m30='30',
  m35='35',
  m40='40',
  m45='45',
  m50='50',
  m55='55',
  selectM='selectM',
}

function Calc():JSX.Element{

  const [isResult,SetIsResult] = useState<boolean>(false);

  const [sleepnow, setSleepnow] =useState<boolean>(false);

  const [how,setHow] = useState<howEnum>(howEnum.wakeup);
  const [hours,setHours] = useState<hoursEnum>(hoursEnum.selectH);
  const [minute,setMinute] = useState<minuteEnum>(minuteEnum.selectM);
  const [ampm,setAmpm] = useState<ampmEnum>(ampmEnum.am)


  return (
    <div className="clac-wrapper">
      <div className="calc-con">
        {!isResult ? <SelectTime
      how={how}
      howH={setHow}
      hours={hours}
      hoursH={setHours}
      minute={minute}
      minuteH={setMinute}
      ampm={ampm}
      ampmH={setAmpm}
      
      /> : <Result how={how} hour={hours} minute={minute} ampm={ampm} sleepnow={sleepnow} />}
      
      <CalcBtns hour={hours} minute={minute} result = {isResult} resultH={SetIsResult} sleepnowH = {setSleepnow} howH = {setHow} />
      </div>

    </div>
  )
}

export default Calc;