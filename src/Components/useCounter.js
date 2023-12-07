import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
    const [state, setSate] = useState(initialValue);

    const increase = () => {
        setSate((prev) => prev+1);
    };

    const decrease = () => {
        setSate((prev) => prev-1)
    };

    const reset = () => {
        setSate((prev) => 0);
    };

    return [state,increase,decrease,reset];
}