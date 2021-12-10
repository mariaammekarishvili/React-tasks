import {useEffect, useState} from "react";

const Calculator = () => {
    const [num,setNum] = useState(0)

    const getNumAction = (e) =>{
        setNum(parseInt(e.target.value))
    }
    const plusAction = () => {
        setNum(num + 1)
    }
    const minAction = () => {
        if(num > 0) {
            setNum(num - 1)
        }else {
            alert('You can not subtract zero')
        }
    }
   const ref = () =>{
        setNum(0)
   }

    console.log(num)

    return(
        <div className={'calculator__main'}>
            <h1>Pleas enter a Number</h1>
            <input className={"calculator__input"} value={num} type={"text"} onChange={getNumAction}/>
            <div className={'button__box'}>
                <button onClick={plusAction}>+</button>
                <button onClick={minAction}>-</button>
            </div>
            <button onClick={ref} className={'refresh__butt'}>Refresh</button>
        </div>
    )
}
export default Calculator;