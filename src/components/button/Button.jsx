import React from 'react'
import './Button.css'

export default props => {
        return(
            <>
                <button className={`button ${props.operator ? 'operation' : ''}
                                           ${props.double ? 'double' : ''}
                                           ${props.triple ? 'triple' : ''}`} 
                                           onClick={_ => props.click(props.label)}>{props.label}</button>
            </>
        )
}