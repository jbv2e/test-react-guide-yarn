import './NewExpense.css'
import ExpenseForm from 'components/NewExpense/ExpenseForm'

const NewExpense = () => {
  // const saveExpenseDataHandler = (enterExpenseData: {
  //   title: string
  //   amount: string
  //   date: Date
  // }) => {
  const saveExpenseDataHandler = <T,>(enterExpenseData: T) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    }

    console.log(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
