import {ClickContext} from "../utils/context/context.jsx";
import {useContext} from "react";
import {KeyPressContext} from "../utils/context/keyPressContext.jsx";

function Button({children, size, color}) {
    const {setClicked} = useContext(ClickContext);
    const {pressedKey} = useContext(KeyPressContext);

    return (
        <div
            onClick={() => setClicked(children)}
            className={`transition ease-out duration-150 shadow-inner hover:bg-opacity-65 active:bg-opacity-100 ${size} ${color} ${pressedKey === children ? "bg-opacity-65" : ""} ${children === "0" ? "text-left pl-8" : "text-center"} align-middle text-xl leading-9 font-bold rounded-full h-9`}
        >
            {children}
        </div>
    );
}

export default Button;
