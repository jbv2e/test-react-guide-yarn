import './ExpenseDate.css'
import { CardParam } from 'dataType/commonType'

function ExpenseDate({ props }: { props: CardParam }) {
  // const month = props.date.toLocaleString('ko-KR', { month: 'long' })
  // const day = props.date.toLocaleString('ko-KR', { day: '2-digit' })
  // const year = props.date.getFullYear()

  const month =
    props.date != null
      ? props.date.toLocaleString('ko-KR', { month: 'long' })
      : ''
  const day =
    props.date != null
      ? props.date.toLocaleString('ko-KR', { day: '2-digit' })
      : ''
  const year = props.date != null ? props.date.getFullYear() : ''

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day ">{day}</div>
    </div>
  )
}

export default ExpenseDate
