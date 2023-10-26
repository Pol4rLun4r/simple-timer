import { RestartStyle } from "./style/Buttons"
import useButtons from "../../hooks/useButtons";

const Restart = () => {
    const { setRestart } = useButtons();

    const handleRestart = () => {
        setRestart(true);
    }

    return (
        <RestartStyle onClick={() => handleRestart()} />
    )
}

export default Restart