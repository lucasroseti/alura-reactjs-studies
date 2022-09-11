import Button from '../Button'
import { Watch } from './components/Watch'

import style from './Timer.module.scss'

export function Timer() {
  return (
    <div className={style.timer}>
      <p  className={style.title}>Choose a card and start the timer</p>

      <div  className={style.watchWrapper}>
        <Watch />
      </div>

      <Button>Start</Button>
    </div>
  )
}