import styled from "styled-components";

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(253deg, rgba(0, 0, 0, 0.54) 10.18%, rgba(0, 0, 0, 0.00) 90.94%);
    backdrop-filter: blur(10px);

    z-index: 2;
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
`

export default Background;