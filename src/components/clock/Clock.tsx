import { useState, useEffect } from "react"
import { CircularProgressbar } from "react-circular-progressbar"

// style
import Background from "./style/Background"
import Timer from "./timer/Timer"
import ProgressContainer from "./style/ProgressContainer"

// hook
import userGetRemainingTime from "../../hooks/userTime"
import userConvertTime from "../../hooks/userConvertTime"

interface IClock {
    time: {
        hr: number,
        min: number,
        sec: number
    }
}

const Clock = ({ time }: IClock) => {
    const defaultRemainingTime = {
        hours: `${time.hr < 10 ? '0' + time.hr : time.hr}`,
        minutes: `${time.min < 10 ? '0' + time.min : time.min}`,
        seconds: `${time.sec < 10 ? '0' + time.sec : time.sec}`,
        progress: 0
    }

    const setTimeMS = userConvertTime({ hr: time.hr, min: time.min, sec: time.sec });
    const startTime = Date.now();

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);


    useEffect(() => {
        const IntervalId = setInterval(() => {
            updateRemainingTime(setTimeMS);
        }, 100);

        return () => clearInterval(IntervalId);
    }, [setTimeMS])


    const updateRemainingTime = (setTime: number) => {
        setRemainingTime(userGetRemainingTime(setTime, startTime));
    }

    return (
        <Background>
            <ProgressContainer>
                <CircularProgressbar strokeWidth={5} value={remainingTime.progress} maxValue={100} />
            </ProgressContainer>
            <Timer remainingTime={remainingTime} />
        </Background>
    )
}

export default Clock