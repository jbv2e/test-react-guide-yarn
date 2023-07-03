import { useState } from 'react'
import './ExpenseFilter.css'

type FilterProps = {
  selected: string
  onChangeYear: (changeYear: string) => void
}

function ExpenseFilter(filterProps: FilterProps) {
  const [FilterYear, setFilterYear] = useState(filterProps.selected)
  // const [filterText, setFilterText] = useState('start')
  // React.ChangeEventHandler<HTMLSelectElement>

  // if (FilterYear === '2023') {
  //   setFilterText('2023-selected')
  // } else if (FilterYear === '2021') {
  //   // setFilterText('2021-selected')
  // }
  const dropdownChangeHandler = (
    args: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterYear(args.target.value)
    // console.log(args.target.value)
    filterProps.onChangeYear(args.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={FilterYear} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {/* <div>{filterText}</div> */}
    </div>
  )
}

export default ExpenseFilter
