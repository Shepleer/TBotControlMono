import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultState) => {
    const savedState = localStorage.getItem(key);
    const [state, setLocalState] = useState(savedState ?? defaultState ?? null);

    if (!savedState && defaultState !== null) {
        localStorage.setItem(key, defaultState);
    }

    useEffect(() => {
        localStorage.setItem(key, state);
    }, [state, setLocalState]);

    return [state, setLocalState];
};