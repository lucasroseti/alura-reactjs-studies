import { ITasks } from '../../../../types/tasks'
import style from './Item.module.scss'

interface Props extends ITasks {
  handleSelectTask: (taskSelected: ITasks) => void
}

export function Item({
  id, name, time, selected, complete, handleSelectTask
}: Props) {
  return (
    <li
      key={id} 
      className={`${style.task} ${selected ? style.taskSelected : ''} ${complete ? style.taskComplete : ''}`}
      onClick={() => !complete && handleSelectTask({
        id, name, time, selected, complete 
      })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {complete && <span className={style.complete} aria-label="Complete Task" />}
    </li>
  )
}
