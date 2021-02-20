import React, {useState} from 'react'
import Button from '../components/button/Button'
import Display from '../components/display/Display'
import './Calculator.css'

export default _ => {

    const [digits, setDigits] = useState([0, 0])

    const [operator, setOperator] = useState('')

    const [current, setCurrent] = useState(0)

    const [displayValue, setDisplayValue] = useState('')

    const clearMemory = _ => {
        setDigits(new Array(2).fill(0))
        setCurrent(0)
        setOperator('')
        setDisplayValue('0')
    }

    const setOperation = operation => {
        switch(operation){
            case '+': 
                multiply(digits)

        }
    }

    const addDigit = digit => {
        if(digit === '.' && (displayValue.includes('.') || displayValue === '0'))
            return
        
        if(displayValue.length >= 11)
            return
        
        setDisplayValue(displayValue === '0' ? digit.toString() : displayValue + digit.toString())
        setCurrent(Number(displayValue))
    }

    return(
        <div className="calculator">
            <Display value={displayValue}/>
            <Button label="AC" triple click={clearMemory}/>
            <Button label="/" operator click={setOperation}/>
            <Button label="0" click={addDigit}/>
            <Button label="1" click={addDigit}/>
            <Button label="2" click={addDigit}/>
            <Button label="X" operator click={setOperation}/>
            <Button label="3" click={addDigit}/>
            <Button label="4" click={addDigit}/>
            <Button label="5" click={addDigit}/>
            <Button label="+" operator click={setOperation}/>
            <Button label="6" click={addDigit}/>
            <Button label="7" click={addDigit}/>
            <Button label="8" click={addDigit}/>
            <Button label="-" operator click={setOperation}/>
            <Button label="9" click={addDigit}/>
            <Button label="." click={addDigit}/>
            <Button label="=" double operator click={setOperation}/>
        </div>
    )
}