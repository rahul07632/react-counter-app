import { useState } from "react";
import '../../App.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrement = () => {
        setCount(prevCount => prevCount + 1)
    };

    const onDecrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const onReset = () => {
        setCount(prevCount => prevCount = 0)
    }

    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter</h1>
            <p className="counter-display">{count}</p>
            <div>
                <button
                    className="button btn-increment"
                    onClick={onIncrement}
                >
                    Increase
                </button>

                <button
                    className="button btn-reset"
                    onClick={onReset}
                >
                    Reset
                </button>

                <button
                    className="button btn-decrement"
                    onClick={onDecrement}
                >
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default Counter;