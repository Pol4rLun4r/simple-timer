//style
import { PlayStyle, PlayPauseContainer, PauseStyle } from "./style/Buttons"

// hook
import useButtons from "../../hooks/useButtons";

const PlayPause = () => {
    const { setPlay, play } = useButtons();

    const handlePlay = () => {
        setPlay(prev => !prev);
    }

    return (
        <PlayPauseContainer onClick={() => handlePlay()}>
            {play && <PauseStyle />}
            {!play && <PlayStyle />}
        </PlayPauseContainer>
    )
}

export default PlayPause;