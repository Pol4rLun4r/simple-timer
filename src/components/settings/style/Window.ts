import styled from "styled-components";
import { device } from "../../../globalStyle/Devices.util";
import { leftAndRight, topAndBottom } from "../../../globalStyle/Sides.util";

const Window = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 90px;
    
    transition: all 0.5s;
    
    z-index: 1;

    @media ${device.mobileS}{
        width: 100%;
        height: 100%;
        padding: ${topAndBottom.mobileS} ${leftAndRight.mobileS};
    }

    @media ${device.myMobile}{
        padding: ${topAndBottom.myMobile} ${leftAndRight.myMobile};
    }

    @media ${device.tablet}{
        /* max-width: 600vw;
        width: 600px;
        height: 50vh; */

        width: auto;
        height: auto;

        padding: 40px;

        border: 2.5px solid;
        border-image: linear-gradient(220deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.2) 100%) 1;
    }
`
export default Window;  