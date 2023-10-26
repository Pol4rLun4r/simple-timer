import { ReactNode, createContext, useState } from "react"

interface IButtonsProv {
    children: ReactNode
}

interface IButtonsContext {
    play: boolean,
    setPlay: React.Dispatch<React.SetStateAction<boolean>>

    restart: boolean,
    setRestart: React.Dispatch<React.SetStateAction<boolean>>
}

const IButtonsContextState = {
    play: false,
    setPlay: () => { },

    restart: false,
    setRestart: () => { }
}

const ButtonsContext = createContext<IButtonsContext>(IButtonsContextState);

export const ButtonsProvider = ({ children }: IButtonsProv) => {
    const [play, setPlay] = useState(false);
    const [restart, setRestart] = useState(false);

    return (
        <ButtonsContext.Provider value={{ play, setPlay, restart, setRestart }}>
            {children}
        </ButtonsContext.Provider>
    )
}

export default ButtonsContext;