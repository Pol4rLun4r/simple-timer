// style
import Background from "./style/Background";
import Window from "./style/Window";
import Title from "./style/Title";

// component
import Buttons from "./buttons/Buttons";

const Settings = () => {
    return (
        <Background>
            <Window>
                <Title>edit Timer</Title>
                <Buttons/>
            </Window>
        </Background>
    )
}

export default Settings;