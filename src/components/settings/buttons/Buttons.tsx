// style
import { Container, Save, Cancel } from "./style/Buttons"
import { CancelIcon, SaveICon } from "./style/Icons"

import useTimer from "../../../hooks/useTimer"

const Buttons = () => {
    const {setSettings} = useTimer();

    const handleCancel = () => {
        setSettings({isActive: false})
    }

    return (
        <Container>
            <Save>
                <SaveICon />
                <span>Save</span>
            </Save>
            <Cancel onClick={() => handleCancel()}>
                <CancelIcon />
                <span>cancel</span>
            </Cancel>
        </Container>
    )
}

export default Buttons