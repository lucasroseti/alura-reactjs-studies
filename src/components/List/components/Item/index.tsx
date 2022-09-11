import style from '../../List.module.scss'

export function Item({ name, time }: { name: string, time: string }) {
  return (
    <li key={name} className={style.task}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  )
}
