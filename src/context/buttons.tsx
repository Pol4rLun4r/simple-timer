import { ReactNode, createContext, useState } from "react"

interface IButtonsProv {
    children: ReactNode
}

interface IButtonsContext {

}

const IButtonsContextState = {

}

const ButtonsContext = createContext<IButtonsContext>(IButtonsContextState);

export const ButtonsProvider = ({ children }: IButtonsProv) => {
    const [playPause, setPlayPause] = useState(false);

    return (
        <ButtonsContext.Provider value={{}}>
            {children}
        </ButtonsContext.Provider>
    )
}