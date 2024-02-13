import React from 'react'
import style from "../Style/Title.module.css";

const Title = ({className, title}) => {
  return (
    <div>
      <div className={style[className]}>
        <h1>
          {title}
        </h1>
    </div>
    </div>
  )
}

export default Title
