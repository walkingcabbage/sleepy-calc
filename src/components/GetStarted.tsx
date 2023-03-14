import { Link } from "react-router-dom";


function GetStarted():JSX.Element{

  return (
    <div className="get-started-wrapper">
      <h2 className="start-tit">수면 주기 계산기를 시작하세요.</h2>
      <p className="start-disc">최적의 기상시간을 알려드릴게요.</p>
      <Link className="start-btn" to='/start'>Get Started</Link>
    </div>
  )
}

export default GetStarted;