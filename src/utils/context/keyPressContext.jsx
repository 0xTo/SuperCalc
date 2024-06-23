import { createContext, useState, useEffect } from 'react';

export const KeyPressContext = createContext();

export function KeyPressProvider({ children }) {
    const [pressedKey, setPressedKey] = useState(null);

    const keyMap = {
        '*': '×',
        'Backspace': '← Suppr',
        'Enter': '=',
        ".": ","
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const mappedKey = keyMap[event.key] || event.key;
            setPressedKey(mappedKey);
        };

        const handleKeyUp = () => {
            setPressedKey(null);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return (
        <KeyPressContext.Provider value={{ pressedKey }}>
            {children}
        </KeyPressContext.Provider>
    );
}
