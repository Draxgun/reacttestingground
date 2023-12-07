import { useState } from 'react';

export const useToggle = (initialValue = false) => {
    const [state, setSate] = useState(initialValue);

    const toggle = () => {
        setSate((prev) => !prev);
    }

    return [state,toggle]
}