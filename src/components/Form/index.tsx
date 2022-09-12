import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ITasks } from '../../types/tasks'

import { Button } from '../Button'
import style from './Form.module.scss'

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>
}

export function Form({ setTasks }: Props) {
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTasks(state => [ ...state, {
      id: uuidv4(),
      name: task,
      time,
      selected: false,
      complete: false
    }])

    setTask('')
    setTime('00:00')
  }

  return (
    <form className={style.newTaskForm} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study?"
          value={task}
          required
          onChange={e => setTask(e.target.value)}
        />
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={time}
          required
          onChange={e => setTime(e.target.value)}
        />
      </div>

      <Button type="submit">Add</Button>
    </form>
  )
}
