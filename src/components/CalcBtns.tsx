
interface prop {
  hour:string;
  minute:string;
  result: boolean;
  resultH:Function;
  sleepnowH: Function;
  howH: Function
}



function CalcBtns({hour, minute, result, resultH, sleepnowH, howH}:prop){

  const resultHandler = ()=>{
    if (hour==='selectH' || minute==='selectM'){
  alert('시간을 입력해주세요.');
  return null;
}
    if(!result) resultH(true);
  }
  const nowResiltHandler = ()=>{
    if(!result) resultH(true);
    sleepnowH(true);
    howH('fallsleep')
  }
  const onReset = ()=>{
    if(result) resultH(false);
    sleepnowH(false);
  }
  
  return(
    <div className="btn-group">
      {result ? null : <button onClick={resultHandler}>계산하기</button>}
      {result ? null : <button onClick={nowResiltHandler}> 지금 잔다면?</button>}
        
        <button onClick={onReset}>다시 계산하기</button>
      </div>
  )
  
}
export default CalcBtns;