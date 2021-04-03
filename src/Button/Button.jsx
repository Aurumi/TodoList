import React from "react";
import "./Button.css"



const Button = (props)=>{

    console.log(props.inputValue)

    return <div className = "container-button" onClick = { props.inputValue=="" ?  null: props.add}>
    
    <div className = "button" ></div>

</div>
}

export default Button;