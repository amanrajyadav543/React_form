import React from 'react'
import style from './Button.modul.css'

export default function Buton({isOutline, icon, text, ...rest}) {
  return (
   <button
   {...rest}
   className={isOutline ? style.isOutline_btn: style.primary_btn}
   >
    {icon}
    {text}
   </button>
  )
}
