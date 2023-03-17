import dayjs from "dayjs";
//받아올 파라미터 타입 선언
interface prop{
  how: string;
  hour: string;
  minute: string;
  ampm: string;
  sleepnow: boolean;
}

function Result({how,hour,minute,ampm,sleepnow}:prop){
  //파라미터로 받은 정수를 기반으로 몇 주기인지 처리 후 시간 반환
  function cycleF(cycle:number):string {
    //데이터 선언 후 숫자처리
    const ap = ampm;
    const hours = parseInt(hour);
    const minutes = parseInt(minute);
    //sleepnow가 클릭되었을 땐 지금 시간으로부터 14분을 더하여 리턴
    if(sleepnow===true){
      const now = dayjs().add(90*cycle+14,'m').format('hh:mm A');
      return now;}

    if(how === 'wakeup'){ //기상시간 체크
      if(ap === 'pm'){ //사용자가 pm 을 선택할 경우 12를 더해준다.
        const newDate = dayjs().hour(hours+12).minute(minutes) 
        const now = dayjs(newDate).subtract(90*cycle,'m').format('hh:mm A');
        return now;
      }else{
        const newDate = dayjs().hour(hours).minute(minutes)
        const now = dayjs(newDate).subtract(90*cycle,'m').format('hh:mm A');
        return now; 
      }
    } else if(how === 'fallsleep'){ //취침시간 체크
      if(ap === 'pm'){
        const newDate = dayjs().hour(hours+12).minute(minutes)
        const now = dayjs(newDate).add(90*cycle,'m').format('hh:mm A');
        return now;
      }else{
        const newDate = dayjs().hour(hours).minute(minutes)
        const now = dayjs(newDate).add(90*cycle,'m').format('hh:mm A');
        return now;
      }
    }else return '';
  }
return (
  <div className="result-wrapper">
    <h2 className="result-tit">당신은 이 시간에 {
    how === 'wakeup' ? <strong>취침하려고</strong> : how === 'fallsleep' ? <strong>기상하려고</strong> : null
    } 노력해야해요! : </h2>
    {how === 'wakeup' ? 
    <ul> 
    <li>
      <h3 className="result-index">01</h3>
      <p><strong>{cycleF(6)}</strong> 6주기 - 9시간 숙면</p>
    </li>
    <li>
      <h3 className="result-index">02</h3>
      <p><strong>{cycleF(5)}</strong> 5주기 - 7시간 30분 숙면</p>
    </li>
    <li>
      <h3 className="result-index">03</h3>
      <p><strong>{cycleF(4)}</strong> 4주기 - 6시간 숙면</p>
    </li>
    <li>
      <h3 className="result-index">04</h3>
      <p><strong>{cycleF(3)}</strong> 3주기 - 4시간 30분 숙면</p>
    </li>
  </ul>
  : how === 'fallsleep' && sleepnow === false ? 
  <ul> 
      <li>
        <h3 className="result-index">01</h3>
        <p><strong>{cycleF(3)}</strong> 3주기 - 4시간 30분 숙면</p>
      </li>
      <li>
        <h3 className="result-index">02</h3>
        <p><strong>{cycleF(4)}</strong> 4주기 - 6시간 숙면</p>
      </li>
      <li>
        <h3 className="result-index">03</h3>
        <p><strong>{cycleF(5)}</strong> 5주기 - 7시간 30분 숙면</p>
      </li>
      <li>
        <h3 className="result-index">04</h3>
        <p><strong>{cycleF(6)}</strong> 6주기 - 9시간 숙면</p>
      </li>
    </ul> : how === 'fallsleep' && sleepnow === true ? 
    <ul> 
      <li>
        <h3 className="result-index">01</h3>
        <p><strong>{cycleF(1)}</strong> 1주기 - 1시간 30분 숙면</p>
      </li>
      <li>
        <h3 className="result-index">02</h3>
        <p><strong>{cycleF(2)}</strong> 2주기 - 3시간 숙면</p>
      </li>
      <li>
        <h3 className="result-index">03</h3>
        <p><strong>{cycleF(3)}</strong> 3주기 - 4시간 30분 숙면</p>
      </li>
      <li>
        <h3 className="result-index">04</h3>
        <p><strong>{cycleF(4)}</strong> 4주기 - 6시간 숙면</p>
      </li>
      <li>
        <h3 className="result-index">05</h3>
        <p><strong>{cycleF(5)}</strong> 5주기 - 7시간 30분 숙면</p>
      </li>
      <li>
        <h3 className="result-index">06</h3>
        <p><strong>{cycleF(6)}</strong> 6주기 - 9시간 숙면</p>
      </li>
    </ul> : null
  }
    <p className="desc">
    이 시간에 {how==='wakeup' ? <strong>일어나야</strong> :
    how === 'fallsleep' ? <strong>잠들어야</strong>:null} 함을 명심하세요. 평균적인 인간은 잠드는 데 <strong>14분</strong>이 걸리므로 적절하게 계획하세요!
    </p>
  </div>
)
}

export default Result;