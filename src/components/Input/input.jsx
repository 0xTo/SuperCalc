import { useContext, useEffect, useState, useRef } from "react";
import { ClickContext } from "../../utils/context/context.jsx";

function Input() {
    const [value, setValue] = useState('');
    const [isFloating, setIsFloating] = useState(true);
    const [isOperating, setIsOperating] = useState(true);
    const { clicked, setClicked } = useContext(ClickContext);
    const inputRef = useRef(null);

    const validValue = ["+", "-", "*", "/", ".", ",", "×"];

    useEffect(() => {
        if (clicked === "=") {
            if (!validValue.includes(value[value.length - 1]) && value) setValue(eval(value.replace(/×/g, '*')).toString());
            setClicked("");
        } else if (clicked === "C") {
            setValue('');
            setIsFloating(true);
            setIsOperating(true);
            setClicked("");
        } else if (clicked === "← Suppr") {
            if (validValue.includes(value[value.length - 1])) {
                if ([".", ","].includes(value[value.length - 1])) setIsFloating(false);
                else setIsOperating(false);
            }
            setValue(value.slice(0, -1));
            if (validValue.includes(value[value.length - 2])) {
                if ([",", "."].includes(value[value.length - 2])) setIsFloating(true);
                else setIsOperating(true);
            }
            setClicked("");
        } else if (clicked === "±") {
            let new_value = value.split('').map(char => {
                if (char === "-") {
                    return "+";
                } else if (char === "+") {
                    return "-";
                } else {
                    return char;
                }
            }).join('');

            if (!isNaN(value[0])) {
                new_value = "-" + new_value;
            }
            if (new_value[0] === "+") {
                new_value = new_value.slice(1);
            }
            setValue(new_value);
            setClicked("");
        } else {
            checkContent(clicked);
            setClicked("");
        }

    }, [clicked]);

    function checkContent(lastChar) {
        // Allow only "-" as the first character, and allow "+" to cancel it
        if (value.length === 0 && lastChar === "-") {
            setValue(lastChar);
            setIsOperating(true);
            setIsFloating(false);
            return;
        }

        if (value === "-" && lastChar === "+") {
            setValue("");
            setIsFloating(true);
            return;
        }

        // Prevent other operators as the first character
        if (validValue.includes(lastChar) && value.length === 0 && lastChar !== "-") {
            return;
        }

        // Convert * to ×
        if (lastChar === "*") {
            lastChar = "×";
        }

        // Check if the last character is an operator and ignore input if true
        if (validValue.includes(value[value.length - 1]) && validValue.includes(lastChar)) {
            return;
        }

        if (validValue.includes(lastChar) && !isOperating) {
            if (lastChar === "." || lastChar === ",") {
                if (!isFloating) {
                    lastChar = ".";
                    setIsFloating(true);
                } else {
                    return;
                }
            } else {
                setIsFloating(false);
                setValue(value + lastChar);
            }
            setIsOperating(true);
            setValue(value + lastChar);
        } else if (!isNaN(lastChar)) {
            setValue(prevValue => {
                const newValue = prevValue + lastChar;
                return newValue;
            });
            setIsOperating(false);
            if (value.length === 0) {
                setIsFloating(false);
            }
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key;
            if (validValue.includes(key) || !isNaN(key)) {
                event.preventDefault();
                checkContent(key);
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            } else if (key === "Enter") {
                event.preventDefault();
                setClicked("=");
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            } else if (event.ctrlKey && (key === "A" || key === "a")) {
                event.preventDefault();
                if (inputRef.current) {
                    inputRef.current.select();
                }
            } else if (key === "Backspace") {
                const selection = window.getSelection();
                const selectedText = selection.toString();
                if (selectedText.length > 0) {
                    event.preventDefault();
                    const newValue = value.replace(selectedText, '');
                    setValue(newValue);
                } else {
                    event.preventDefault();
                    setClicked("← Suppr");
                }
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, [value, isFloating, isOperating]);

    return (
        <div>
            <input
                type={"text"}
                value={value}
                ref={inputRef}
                placeholder={"0"}
                onChange={(e) => {
                    checkContent(e.target.value[e.target.value.length - 1]);
                }}
                className={"border-0 text-2xl border-b border-separator_unfocus focus:border-separator_focus p-2 w-full text-right bg-calc_bg focus:outline-none text-primary transition duration-200 ease-in-out select-custom"}
            />
        </div>
    );
}

export default Input;
