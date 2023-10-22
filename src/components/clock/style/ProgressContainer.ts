import styled from "styled-components";

const ProgressContainer = styled.div`
    width: 80%;

    /*
    * react-circular-progressbar styles
    * All of the styles in this file are configurable!
    */

    .CircularProgressbar {
    /*
    * This fixes an issue where the CircularProgressbar svg has
    * 0 width inside a "display: flex" container, and thus not visible.
    */
    width: 100%;
    /*
    * This fixes a centering issue with CircularProgressbarWithChildren:
    * https://github.com/kevinsqi/react-circular-progressbar/issues/94
    */
    vertical-align: middle;
    }

    .CircularProgressbar .CircularProgressbar-path {
    stroke: #9C4EFF;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.3s ease 0s;
    }
`

export default ProgressContainer;