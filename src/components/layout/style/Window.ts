import styled from "styled-components";
import { device } from "../../../globalStyle/Devices.util";
import { leftAndRight, topAndBottom } from "../../../globalStyle/Sides.util";

const Window = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    transition: all 0.5s;
    
    @media ${device.mobileS}{
        width: 100%;
        height: 100%;
        padding: ${topAndBottom.mobileS} ${leftAndRight.mobileS};
    }

    @media ${device.myMobile}{
        padding: ${topAndBottom.myMobile} ${leftAndRight.myMobile};
    }

    @media ${device.tablet}{
        
        max-width: 500vw;
        width: 400px;
        height: 50vh;

        padding: 40px;

        border: 2.5px solid;
        border-image: linear-gradient(220deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 60%, rgba(255, 255, 255, 0.2) 100%) 1;
    }
`
export default Window;  