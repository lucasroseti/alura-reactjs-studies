import React from 'react'

import style from './button.module.scss'

interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  children: React.ReactNode
}

export function Button({ type, children, onClick}: Props) {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  )
}

