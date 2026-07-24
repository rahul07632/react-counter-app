import { Component } from 'react'

import '../../App.css'

class Counter extends Component {
    state = { count: 0 }
    onIncrement = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

    onDescrement = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }))
    }

    onReset = () => {
        this.setState(prevState => ({ count: (prevState.count = 0) }))
    }

    render() {
        const { count } = this.state
        return (
            <div className="counter-container">
                <h1 className="counter-title">Counter</h1>
                <p className="counter-display">{count}</p>
                <div className="">
                    <button className="button btn-increment" onClick={this.onIncrement}>
                        Increase
                    </button>
                    <button className="button btn-reset" onClick={this.onReset}>
                        Reset
                    </button>
                    <button className="button btn-decrement" onClick={this.onDescrement}>
                        Descrease
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter
