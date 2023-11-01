import styled, { css } from "styled-components";
import { ReactComponent as CancelStyle } from "../../../../assets/icons/xmark-solid.svg";
import { ReactComponent as SaveStyle } from "../../../../assets/icons/floppy-disk-regular.svg";

const IconsDefault = () => {
    return css`
        width: 15px;
    `
}

export const CancelIcon = styled(CancelStyle)`
    ${IconsDefault()}
    path {
        fill: #5A5A5A;
    }
`

export const SaveICon = styled(SaveStyle)`
    ${IconsDefault()}
`