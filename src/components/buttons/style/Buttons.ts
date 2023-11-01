import styled, { css } from "styled-components";

// icons
import { ReactComponent as PlayIcon } from "../../../assets/icons/play-fill.svg";
import { ReactComponent as PauseICon } from "../../../assets/icons/pause-fill.svg";
import { ReactComponent as RestartICon } from "../../../assets/icons/restart-line.svg";
import { ReactComponent as SettingsICon } from "../../../assets/icons/settings-3-fill.svg";

const sizeIcons = () => {
    return css`
        width: 30px;

        cursor: pointer;

        path {
            fill: #616161;
        }
    `
}
const sizeIconsPlayPause = () => {
    return css`
        width: 25px;
    `
}

export const PlayPauseContainer = styled.div`
    padding: 5px 10px;
    background-color: #9C4EFF;
    border-radius: 100px;

    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 0px 41px rgba(102, 78, 255, 0.45);

    cursor: pointer;
`

export const PlayStyle = styled(PlayIcon)`
    ${sizeIconsPlayPause()}
`

export const PauseStyle = styled(PauseICon)`
    ${sizeIconsPlayPause()}
`

export const RestartStyle = styled(RestartICon)`
    ${sizeIcons()}
`

export const SettingsStyle = styled(SettingsICon)`
    ${sizeIcons()}
`