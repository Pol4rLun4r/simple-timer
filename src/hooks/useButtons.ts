import { useContext } from "react";
import ButtonsContext from "../context/buttons";

const useButtons = () => {
    return useContext(ButtonsContext);
}

export default useButtons;