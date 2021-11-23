const Counter = function () {
    return(
        <div className="counter">
            <div className="displays-block">
                <div className="count-block"><span className="count">0</span></div>
                <div className="even-odd-block"><span className="even-odd">Введено четное число</span></div>
            </div>
            <div className="buttons-block">
                <button className="minus">-</button>
                <button className="reset">reset</button>
                <button className="plus">+</button>
            </div>
        </div>
    );
};

ReactDOM.render(<Counter />, document.querySelector('#counter'));

