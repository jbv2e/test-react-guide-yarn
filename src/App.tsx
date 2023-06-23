// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from 'components/Expenses/ExpenseItem'
import { ExpensesParam } from 'dataType/commonType'
import NewExpense from 'components/NewExpense/NewExpense'

function App() {
  const expenses: ExpensesParam[] = [
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
  ]

  return (
    <div>
      <h2>Start</h2>
      <NewExpense></NewExpense>
      {expenses.map((exp) => {
        return <ExpenseItem key={exp.id} props={exp} />
      })}
      {/* <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} /> */}
    </div>
  )
}

export default App
