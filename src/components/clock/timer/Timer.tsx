import Counter from "./style/Counter"

interface ITimer {
  remainingTime: {
    seconds: string;
    minutes: string;
    hours: string;
  }
}

const Timer = ({ remainingTime }: ITimer) => {
  return (
    <Counter>
      <span className="hours">{remainingTime.hours}</span>
      :
      <span className="minutes">{remainingTime.minutes}</span>
      :
      <span className="seconds">{remainingTime.seconds}</span>
    </Counter>
  )
}

export default Timer