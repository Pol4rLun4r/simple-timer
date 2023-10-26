import { ReactNode, createContext, useState } from "react"

interface ITimerProv {
    children: ReactNode
}

interface ITimerContext {
    intervalId: number | undefined,
    setIntervalId: React.Dispatch<React.SetStateAction<number | undefined>>
}

const ITimerContextState = {
    intervalId: undefined,
    setIntervalId: () => { },
}

const TimerContext = createContext<ITimerContext>(ITimerContextState);

export const TimerProvider = ({ children }: ITimerProv) => {
    const [intervalId, setIntervalId] = useState<number>();

    return (
        <TimerContext.Provider value={{ intervalId, setIntervalId }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext;