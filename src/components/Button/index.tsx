import React from "react";
import style from './Button.module.scss'

class Button extends React.Component {
    render(){
        return (
            <button className={style.Botao}>Button</button>
        )
    }
}
export default Button;