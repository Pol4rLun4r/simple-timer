import styled from "styled-components";

interface ICounter {
    hour: boolean,
    minute: boolean
}

const Counter = styled.div`
    text-transform: uppercase;
    /* font-size: 25px; hours */
    /* font-size: 40px; minutes */
    /* font-size: 50px; seconds */
    
    font-size: ${({ hour, minute }: ICounter) => hour ? '25px' : minute ? '40px' : '50px'};

    position: fixed;
    z-index: 1;

    width: 100%;
    height: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    .time {
        display: flex;
        align-items: center;
        width: 2ch;
    }
    
    .hours {
        justify-content: flex-end;
        margin-right: 5px;
    }
    
    .minutes{
        justify-content: center;
        margin: 0px 3px;
    }

    .seconds{
        margin-left: 5px;
    }

`

export default Counter;