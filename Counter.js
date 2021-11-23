const {useState} = React;

const Counter = function () {
    const [count, setCount] = useState(0);

    return(
        <div className={count % 2 === 0 ? "counter" : "counter even-bgc"}>
            <div className="displays-block">
                <div className="count-block"><span className="count">{count}</span></div>
                <div className="even-odd-block"><span className="even-odd">{count % 2 === 0 ? 'Введено четное число' : 'Введено нечетное число'}</span></div>
            </div>
            <div className="buttons-block">
                <button className="minus" onClick={count > 0 ? ()=>setCount(count-1) : ()=>setCount(0)}>-</button>
                <button className="reset" onClick={()=>setCount(0)}>reset</button>
                <button className="plus" onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
    );
};

ReactDOM.render(<Counter />, document.querySelector('#counter'));

