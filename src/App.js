import {useState} from "react";
import "./styles.css";

export default function App(){
    return(
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter(){

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset(){
        setCount(0);
        setStep(1);
    }

    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + count);

    return(
        <div>
            <div>
                <input 
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(step) => setStep(Number(step.target.value))}
                />
                
                <span>Step: {step}</span>
                
            </div>

            <div>
                <button onClick ={() => setCount((count) => count - step)}>-</button>
                <input 
                    type="text" 
                    value={count} 
                    onChange={(count) => setCount(Number(count.target.value))}
                />
                <button onClick ={() => setCount((count) => count + step)}>+</button>
            </div>

            <p>
                <span>
                    {count ===0 
                        ? "Today is " 
                        : count > 0 
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>

            <div>
                <button onClick={handleReset}>reset</button>
            </div>


        </div>

        
    );

}