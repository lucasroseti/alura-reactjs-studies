export function List() {
  const tasks = [
    {name: 'React', time: '02:00:00'},
    {name: 'Javascript', time: '01:30:00'},
    {name: 'Typescript', time: '03:00:00'}
  ]

  return (
    <aside>
      <h2>Studies of the day</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task.name}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}