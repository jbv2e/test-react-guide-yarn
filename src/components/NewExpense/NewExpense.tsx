import './NewExpense.css'
import ExpenseForm from 'components/NewExpense/ExpenseForm'

type propsNewExpense = {
  onAddExpense: <T>(enterExpenseData: T) => void
}

const NewExpense = (props: propsNewExpense) => {
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
