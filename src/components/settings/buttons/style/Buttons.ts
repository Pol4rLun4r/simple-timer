import styled, {css} from "styled-components";

const ButtonsDefault = () => {
    return css`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        flex: 1 0 0;

        border-radius: 8px;
        padding: 8px 12px;
        
        span{
            letter-spacing: 5px;
            text-transform: capitalize;
        }

        
        cursor: pointer;
    `
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    width: 100%;
`

export const Save = styled.div`
    ${ButtonsDefault()}
    background: #5A5A5A;
    color: black;
`

export const Cancel = styled.div`
    ${ButtonsDefault()}
    border: 1px solid #5A5A5A;
    color: #5A5A5A;
`