import { useEffect, useState } from "react"
import { CircularProgressbar } from "react-circular-progressbar"

// style
import Background from "./style/Background"
import Timer from "./timer/Timer"
import ProgressContainer from "./style/ProgressContainer"

// hook
import userGetRemainingTime from "../../hooks/userTime"
import userConvertTime from "../../hooks/userConvertTime"
import useButtons from "../../hooks/useButtons"
import useTimer from "../../hooks/useTimer"

interface IClock {
    time: {
        hr: number,
        min: number,
        sec: number
    }
}

const Clock = ({ time }: IClock) => {
    const { play, setPlay, restart, setRestart } = useButtons();
    const { setIntervalId, intervalId } = useTimer();

    const defaultRemainingTime = {
        hours: `${time.hr < 10 ? '0' + time.hr : time.hr}`,
        minutes: `${time.min < 10 ? '0' + time.min : time.min}`,
        seconds: `${time.sec < 10 ? '0' + time.sec : time.sec}`,
        progress: 100,
        milliseconds: 0
    }

    const setTimeMS = userConvertTime({ hr: time.hr, min: time.min, sec: time.sec });
    const startTime = Date.now();

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        if (play) {
            updateRemainingTime(setTimeMS);
            setIntervalId(setInterval(() => {
                updateRemainingTime(setTimeMS);
            }, 100));
        }

        if (!play) {
            clearInterval(intervalId)
        }

        return () => clearInterval(intervalId)
    }, [play]);

    useEffect(() => {
        if (restart) {
            updateRemainingTime(setTimeMS);
            clearInterval(intervalId);
            setRemainingTime(defaultRemainingTime);
            setRestart(false);
            setPlay(false);
        }
    }, [restart])

    const updateRemainingTime = (setTime: number) => {
        setRemainingTime(userGetRemainingTime(setTime, startTime, remainingTime.milliseconds));
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