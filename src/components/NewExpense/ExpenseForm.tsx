import { useState } from 'react'
import './ExpenseForm.css'
// import { Styled } from 'styled-components/dist/constructors/constructWithOptions'

interface IExpenseFormProps {
  onSaveExpanseData: (enterExpenseData: {
    title: string
    amount: string
    date: Date
  }) => void
}

type ExpenseFormProp = {
  onSaveExpanseData: <T>(enterExpenseData: T) => void
}

// type Tp {
//   onSaveExpanseData: <T>(enterExpenseData: T) => void
// }
// const ExpenseForm = (props: IExpenseFormProps) => {
// const ExpenseForm = <T, >(props: T) => {
const ExpenseForm = (props: ExpenseFormProp) => {
  const [enterTitle, setEnterTitle] = useState('')
  const [enterAmount, setEnterAmount] = useState('0')
  const [enterDate, setEnterDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enterTitle: '',
  //   enterAmount: '',
  //   enterDate: '',
  // })
  // (property) React.InputHTMLAttributes<HTMLInputElement>.onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined

  // React.ChangeEvent<HTMLInputElement>
  // const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput({
  //     ...userInput,
  //     enterTitle: e.target.value,
  //   })
  // }

  // const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput({
  //     ...userInput,
  //     enterAmount: e.target.value,
  //   })
  // }

  // const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserInput({
  //     ...userInput,
  //     enterDate: e.target.value,
  //   })
  // }

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterTitle(e.target.value)
  }

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterAmount(e.target.value)
  }

  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterDate(e.target.value)
  }

  const submitHander = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    }

    // console.log(e?.msg?.test)
    props.onSaveExpanseData(expenseData)

    // console.log(expenseData)

    setEnterTitle('')
    setEnterAmount('')
    setEnterDate('')
  }

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
