import './NewExpense.css'
import ExpenseForm from 'components/NewExpense/ExpenseForm'
import { ExpensesParam } from 'dataType/commonType'
import { useState } from 'react'

type propsNewExpense = {
  onAddExpense: (enterExpenseData: ExpensesParam) => void
}

const NewExpense = (props: propsNewExpense) => {
  const [isEditing, setIsEditing] = useState(false)
  // const saveExpenseDataHandler = (enterExpenseData: {
  //   title: string
  //   amount: string
  //   date: Date
  // }) => {
  const saveExpenseDataHandler = (enterExpenseData: ExpensesParam) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    }

    // console.log(expenseData)

    props.onAddExpense(expenseData)
    setIsEditing(false)

    // function identity<Type>(arg: Type): Type {
    //   return arg
    // }

    // const myIdentity: <Type>(arg: Type) => Type = identity

    // console.log(myIdentity('a'))
  }

  const isEditingHandler = () => {
    setIsEditing((prev) => !prev)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpanseData={saveExpenseDataHandler}
          onCancleForm={isEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  )
}

export default NewExpense
