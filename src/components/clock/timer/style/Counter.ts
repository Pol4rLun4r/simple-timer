import styled from "styled-components";

const Counter = styled.div`
    text-transform: uppercase;
    font-size: 2.8vw;

    position: fixed;
    z-index: 1;

    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    span {
        display: flex;
        align-items: center;
        width: 2ch;
    }

    .minutes{
        justify-content: center;
        margin: 0px 3px;
    }

    .seconds{
        margin-left: 5px;
    }

    .hours {
        justify-content: flex-end;
        margin-right: 5px;
    }
`

export default Counter;