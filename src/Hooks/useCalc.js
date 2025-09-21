import { useState } from "react";

export const useCalc = (initialValue = 0) => {
    const [number, setNumber] = useState(initialValue);

    const addNumber = () => {
        setNumber((number) => number+1);
    }
    const minusNumber = () => {
        setNumber((number) => number-1);
    }
    const setToZero = () => {
        setNumber(0)
    }

    return [number, addNumber, minusNumber, setToZero]
};