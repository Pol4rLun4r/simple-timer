import { ReactNode, createContext, useState } from "react"

interface ITimerProv {
    children: ReactNode
}

interface ITimerContext {
    intervalId: number | undefined,
    setIntervalId: React.Dispatch<React.SetStateAction<number | undefined>>
    // ==================================== //
    settings: {
        hour?: string, 
        minute?: string,
        second?: string,
        isActive?: boolean
    },
    setSettings: React.Dispatch<React.SetStateAction<{
        hour?: string,
        minute?: string,
        second?: string,
        isActive?: boolean
    }>>
}

const ITimerContextState = {
    intervalId: undefined,
    setIntervalId: () => { },
    // ==================================== //
    settings: {
        hour: '00',
        minute: '00',
        second: '00',
        isActive: false
    },
    setSettings: () => { }
}

const TimerContext = createContext<ITimerContext>(ITimerContextState);

export const TimerProvider = ({ children }: ITimerProv) => {
    const [intervalId, setIntervalId] = useState<number>();
    const [settings, setSettings] = useState({});

    return (
        <TimerContext.Provider value={{ intervalId, setIntervalId, setSettings, settings }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerContext;