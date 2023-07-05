import './NewExpense.css'
import ExpenseForm from 'components/NewExpense/ExpenseForm'
import { ExpensesParam } from 'dataType/commonType'

type propsNewExpense = {
  onAddExpense: (enterExpenseData: ExpensesParam) => void
}

const NewExpense = (props: propsNewExpense) => {
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

    // function identity<Type>(arg: Type): Type {
    //   return arg
    // }

    // const myIdentity: <Type>(arg: Type) => Type = identity

    // console.log(myIdentity('a'))
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
