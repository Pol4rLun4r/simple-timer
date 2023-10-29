import Counter from "./style/Counter"

interface ITimer {
  remainingTime: {
    seconds: string;
    minutes: string;
    hours: string;
    milliseconds: number;
  }
}

const Timer = ({ remainingTime }: ITimer) => {

  const checkTimerNumbers = (number: string): boolean => {
    if (number === '00') return false
    return true
  };

  return (
    <Counter hour={checkTimerNumbers(remainingTime.hours)} minute={checkTimerNumbers(remainingTime.minutes)} >
      {checkTimerNumbers(remainingTime.hours) &&
        <>
          <span className="hours time">{remainingTime.hours}</span>
          <span>:</span>
        </>
      }
      {checkTimerNumbers(remainingTime.minutes) || checkTimerNumbers(remainingTime.hours) ?
        <>
          <span className="minutes time">{remainingTime.minutes}</span>
          <span>:</span>
        </>
        : <></>
      }
      <span className="seconds time">{remainingTime.seconds}</span>
    </Counter>
  )
}

export default Timer