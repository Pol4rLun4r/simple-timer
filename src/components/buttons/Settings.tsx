//style
import { SettingsStyle } from "./style/Buttons";

// hook
import useTimer from "../../hooks/useTimer";

const Settings = () => {
    const { setSettings } = useTimer();

    const handleSettings = ( ) => {
        setSettings({isActive: true})
    }  

    return (
        <SettingsStyle onClick={() => handleSettings()}/>
    )
}

export default Settings