import { useContext } from "react";
import TimerContext from "../context/timer";

const useTimer = () => {
    return useContext(TimerContext)
}

export default useTimer;