
const Buttons = ({ onHandleEvent }) => {
    return (
        <div className="row">
            <div className="col-md">
                <div className="items">
                    <button onClick={() => onHandleEvent('/')}>/</button>
                    <button onClick={() => onHandleEvent('*')}>*</button>
                    <button onClick={() => onHandleEvent('-')}>-</button>
                </div>
                <div className="items">
                    <button onClick={() => onHandleEvent('7')}>7</button>
                    <button onClick={() => onHandleEvent('8')}>8</button>
                    <button onClick={() => onHandleEvent('9')}>9</button>
                </div>
                <div className="items">
                    <button onClick={() => onHandleEvent('4')}>4</button>
                    <button onClick={() => onHandleEvent('5')}>5</button>
                    <button onClick={() => onHandleEvent('6')}>6</button>
                </div>
                <div className="items">
                    <button onClick={() => onHandleEvent('1')}>1</button>
                    <button onClick={() => onHandleEvent('2')}>2</button>
                    <button onClick={() => onHandleEvent('3')}>3</button>
                </div>
                <div className="items">
                    <button onClick={() => onHandleEvent('.')}>.</button>
                    <button onClick={() => onHandleEvent('0')}>0</button>
                    <button onClick={() => onHandleEvent('clear')}>CLEAR</button>
                </div>
            </div>
            <div className="col-sm">
                <div>
                    <button onClick={() => onHandleEvent('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => onHandleEvent('=')}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Buttons;