// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ExpenseItem } from 'components/Expenses/ExpenseItem'
import { ExpensesParam } from 'dataType/commonType'
import NewExpense from 'components/NewExpense/NewExpense'
import { useState } from 'react'
import ExpenseFilter from './components/Expenses/ExpenseFilter'

function App() {
  // const expenses: ExpensesParam[] = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ]

  const [ExpenseParam] = useState<ExpensesParam[]>([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ])

  const [FilterYear, setFilterYear] = useState('2022')
  const [filterText, setFilterText] = useState('start')

  // const addExpenseHandler = (expense: ExpensesParam) => {
  const addExpenseHandler = <T,>(expense: T) => {
    // console.log('in app.js')
    // console.log(expense)
  }

  const onChangeYearHandler = (year: string) => {
    // console.log('year app')
    // console.log(year)
    setFilterYear(year)

    // console.log()
  }

  if (FilterYear === '2023') {
    setFilterText('2023-selected')
  } else if (FilterYear === '2021') {
    // setFilterText('2021-selected')
  }

  return (
    <div>
      <h2>Start</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <div>{filterText}</div>

      <ExpenseFilter selected={FilterYear} onChangeYear={onChangeYearHandler} />
      {/* {ExpenseParam.map((exp) => {
        return <ExpenseItem key={exp.id} value={exp} />
      })} */}
      {ExpenseParam.filter(
        (exp) => exp.date.getFullYear().toString() === FilterYear
      ).map((exp) => {
        return <ExpenseItem key={exp.id} value={exp} />
        // console.log(exp)
      })}
      {/* {expenses.map((exp) => {
        return <ExpenseItem key={exp.id} value={exp} />
      })} */}
      {/* <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} /> */}
    </div>
  )
}

export default App
