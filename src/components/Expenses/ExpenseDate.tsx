import './ExpenseDate.css'
import { CardParam } from 'dataType/commonType'

function ExpenseDate({ cardParam }: { cardParam: CardParam }) {
  // const month = props.date.toLocaleString('ko-KR', { month: 'long' })
  // const day = props.date.toLocaleString('ko-KR', { day: '2-digit' })
  // const year = props.date.getFullYear()

  const month =
    cardParam.date != null
      ? cardParam.date.toLocaleString('ko-KR', { month: 'long' })
      : ''
  const day =
    cardParam.date != null
      ? cardParam.date.toLocaleString('ko-KR', { day: '2-digit' })
      : ''
  const year = cardParam.date != null ? cardParam.date.getFullYear() : ''

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day ">{day}</div>
    </div>
  )
}

export default ExpenseDate
