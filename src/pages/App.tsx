import { useState } from 'react'

import { ITasks } from '../types/tasks'

import { Form } from '../components/Form'
import { List } from '../components/List'
import { Timer } from '../components/Timer'
import style from './App.module.scss'

export function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([])
  const [taskSelected, setTaskSelected] = useState<ITasks>()

  function handleSelectTask(taskSelected: ITasks) {
    setTaskSelected(taskSelected)
    setTasks(state => state.map(task => ({
      ...task,
      selected: task.id === taskSelected.id
    })))
  }

  function handleTaskComplete() {
    if (taskSelected) {
      setTaskSelected(undefined)
      setTasks(state => state.map(task => {
        if (task.id === taskSelected.id) {
          return {
            ...task,
            selected: false,
            complete: true
          }
        }
        return task
      }))
    }
  }
  
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} handleSelectTask={handleSelectTask} />
      <Timer taskSelected={taskSelected} handleTaskComplete={handleTaskComplete} />
    </div>
  )
}
