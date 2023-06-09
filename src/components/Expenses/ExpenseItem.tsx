import { useEffect, useState } from 'react'
import './ExpenseItem.css'
import { ExpensesParam } from 'dataType/commonType'
import ExpenseDate from 'components/Expenses/ExpenseDate'
import Card from '@/components/UI/Card'

function ExpenseItem({ props }: { props: ExpensesParam }) {
  // const [today, setToday] = useState(getToday())

  const [title, setTitle] = useState(props.title)
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
    <Card className="expense-item">
      <div>
        <ExpenseDate props={props} />
      </div>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>타이틀변경</button>
    </Card>
  )
}

export default ExpenseItem
