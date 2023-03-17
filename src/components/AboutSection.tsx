function AboutSection():JSX.Element{

  return (
    <div className="about-wrapper">
      <div className="about-tit">
        <h3>우리는 왜 이 계산기를 써야할까요?</h3>
      </div>
      <div className="about-con about-con-1">
        <div className="left">
          <p>우리는 잠을 제대로 자는 것이 중요하다는 것을 알고 있어요.
            하지만 대부분의 사람들은 자신의 수면 주기를 관리하는 방법을 잘 알지 못합니다.
            이 애플리케이션을 활용하여 당신의 수면 주기를 최적화하는 방법을 찾아드릴게요.</p>
        </div>
        <div className="right">
          <img src={require('../assets/img/cat-gc7807c2b0_640.jpg')} alt="" />
        </div>
      </div>
      <div className="about-con about-con-2">
      <div className="left">
      <p>
          당신의 수면 주기를 최적화함으로써, 당신은 건강한 삶을 얻을 수 있을 거예요.
          이 웹 사이트는 일상 생활에서 잠을 어떻게 효율적이게 취할 수 있는지를 알려줘요.
          </p>
      </div>
        <div className="right">
        <img src={require('../assets/img/moon-gc0c214c8a_640.jpg')} alt="" />

        </div>
      </div>
      <div className="about-con about-con-3">
      <div className="left">
        <p>
        건강과 행복은 우리의 가장 큰 관심사입니다. 이 애플리케이션을 사용하여 당신의 수면 주기를 최적화하여 일상에서 더 나은 퍼포먼스를 발휘할 수 있을 거예요.
        </p>
      </div>
        <div className="right">
          <img src={require('../assets/img/baby-g2b1f48f47_640.jpg')} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection;