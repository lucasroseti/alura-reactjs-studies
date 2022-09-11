import Form from '../components/Form'
import { List } from '../components/List'
import style from './App.module.scss'

export function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  )
}
