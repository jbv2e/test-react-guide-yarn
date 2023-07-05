// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ExpenseItem } from 'components/Expenses/ExpenseItem'
import { ExpensesParam } from 'dataType/commonType'
import NewExpense from 'components/NewExpense/NewExpense'
import { ReactElement, useState } from 'react'
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

  const [expenseParam, setExpenseParam] = useState<ExpensesParam[]>([
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

  // const [filterResult, setFilterResult] = useState<ExpensesParam[]>()

  const [FilterYear, setFilterYear] = useState('2022')

  // const addExpenseHandler = (expense: ExpensesParam) => {
  const addExpenseHandler = (data: ExpensesParam) => {
    // console.log('in app.js')
    // console.log(expense)

    setExpenseParam((prevExpense) => [data, ...prevExpense])
  }

  const onChangeYearHandler = (year: string) => {
    // console.log('year app')
    // console.log(year)
    setFilterYear(year)
  }

  const filterExpenses = expenseParam.filter((exp) =>
    [exp.date.getFullYear().toString(), 'all'].includes(FilterYear)
  )

  let filteredContent : ReactElement | ReactElement[] = <p>일치하는 조회결과가 없습니다</p>

  if (filterExpenses.length > 0) {
    filteredContent =  filterExpenses.map((exp) => {
      return <ExpenseItem key={exp.id} value={exp} />
    })
  }

  
  return (
    <div>
      <h2>Start</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <ExpenseFilter selected={FilterYear} onChangeYear={onChangeYearHandler} />
      {/* {ExpenseParam.map((exp) => {
        return <ExpenseItem key={exp.id} value={exp} />
      })} */}
      {/* {expenseParam
        .filter(
          (exp) =>
            [exp.date.getFullYear().toString(), 'all'].includes(FilterYear)

          // exp.date.getFullYear().toString() === FilterYear ||
          // FilterYear === 'all'
        )
        .map((exp) => {
          return <ExpenseItem key={exp.id} value={exp} />
          // console.log(exp)
        })} */}
      {/* {filterExpenses.length === 0  ? <p>일치하는 조회결과가 없습니다</p> : 
      filterExpenses
        .map((exp) => {
          return <ExpenseItem key={exp.id} value={exp} />
          // console.log(exp)
        })} */}
      {filteredContent}
    </div>
  )
}

export default App
