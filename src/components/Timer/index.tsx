import { useEffect, useState } from 'react'
import { timeToSeconds } from '../../common/utils/time'
import { ITasks } from '../../types/tasks'

import { Button } from '../Button'
import { Watch } from './components/Watch'

import style from './Timer.module.scss'

interface Props {
  taskSelected: ITasks | undefined
  handleTaskComplete: () => void
}

export function Timer({ taskSelected, handleTaskComplete }: Props) {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if (taskSelected?.time) setTime(timeToSeconds(taskSelected.time))
  }, [taskSelected])

  function startTimer(countTime: number = 0) {
    setTimeout(() => {
      if (countTime > 0) {
        setTime(countTime - 1)
        return startTimer(countTime - 1)
      }
      handleTaskComplete()
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p  className={style.title}>Choose a card and start the timer</p>

      <div  className={style.watchWrapper}>
        <Watch time={time} />
      </div>

      <Button onClick={() => startTimer(time)}>Start</Button>
    </div>
  )
}