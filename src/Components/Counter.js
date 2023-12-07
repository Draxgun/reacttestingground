import { useCounter } from "./useCounter"


export const Counter = () => {
    const [currentNumber, increase,decrease,reset] = useCounter()
    
    return (
        <div>
            <h1>The number is {currentNumber}</h1>
            
            <div>
                <button onClick={increase}>Add</button>
                <button onClick={decrease}>Substract</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}