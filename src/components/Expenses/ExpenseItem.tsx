import { useEffect, useState } from 'react'
import './ExpenseItem.css'
import { ExpensesParam } from 'dataType/commonType'
import ExpenseDate from 'components/Expenses/ExpenseDate'
import Card from '@/components/UI/Card'
// import ExpenseFilter from './ExpenseFilter'

// export type ExpenseItemProps = {
//   id: string
//   title: string
//   amount: number
//   date: Date
// }

export function ExpenseItem({ value }: { value: ExpensesParam }) {
  // const [today, setToday] = useState(getToday())

  const [title, setTitle] = useState(value.title)
  // function getToday() {
  //   const date = new Date()
  //   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  // }
  // useEffect(() => {}, [])

  const clickHandler = () => {
    setTitle(title + ' update')
    //props.title = 'test'
    console.log('clicked')
  }
  //        <!-- <h2>{props.title}</h2> -->

  return (
    <div>
      <Card className="expense-item">
        <div>
          <ExpenseDate cardParam={value} />
        </div>

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{value.amount}</div>
        </div>
        <button onClick={clickHandler}>타이틀변경</button>
      </Card>
    </div>
  )
}

// export default ExpenseItem
