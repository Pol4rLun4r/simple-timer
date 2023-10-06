import { ReactNode } from "react"
import GlobalStyle from "../../globalStyle/Global.style"
import Main from "./style/Main"
import Window from "./style/Window"

interface ILayout {
    children: ReactNode
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Window>
                    {children}
                </Window>
            </Main>
        </>
    )
}

export default Layout