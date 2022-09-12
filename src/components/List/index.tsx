import { ITasks } from '../../types/tasks'

import { Item } from './components/Item'
import style from './List.module.scss'

interface Props {
  tasks: ITasks[]
  handleSelectTask: (taskSelected: ITasks) => void
}

export function List({ tasks, handleSelectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>

      <ul>
        {tasks.map((task) => (
          <Item
            key={task.name}
            handleSelectTask={handleSelectTask}
            { ...task}
          />
        ))}
      </ul>
    </aside>
  )
}
