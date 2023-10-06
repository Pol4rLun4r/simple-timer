import styled from "styled-components";
import { ReactComponent as CircleIcon } from "../../../assets/icons/circle-progress.svg"

const ProgressCircle = styled.div`
    width: 160px;
    height: 160px;

    border-radius: 50%;
    border: 10px solid #664EFF;
`

interface ICircle {
    $progress: number;
}

export const Circle = styled(CircleIcon)`
    transform: rotate(-90deg);

    circle {
        fill: none;
        stroke: #9C4EFF;
        stroke-width: 10px;
        stroke-dasharray: 450;
        stroke-dashoffset: ${({ $progress }: ICircle) => $progress ? $progress : 0};
    }
`

export default ProgressCircle;