import React from 'react'
import style  from "../Style/Button.module.css";

const Button = ({className, title, btnEventHandler}) => {
  return (
    <div onClick={btnEventHandler} className={style[className]}>
        <p>
          {title}
        </p>
    </div>
  )
}

export default Button