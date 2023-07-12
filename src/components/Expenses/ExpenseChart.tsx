import { ExpensesParam } from '@/dataType/commonType'
import Chart from 'components/Chart/Chart'

type chartDataPointType = {
  label: string
  value: number
}

const ExpenseChart = (props: { expenses: ExpensesParam[] }) => {
  const chartDataPoints = [
    { label: '1월', value: 0 },
    { label: '2월', value: 0 },
    { label: '3월', value: 0 },
    { label: '4월', value: 0 },
    { label: '5월', value: 0 },
    { label: '6월', value: 0 },
    { label: '7월', value: 0 },
    { label: '8월', value: 0 },
    { label: '9월', value: 0 },
    { label: '10월', value: 0 },
    { label: '11월', value: 0 },
    { label: '12월', value: 0 },
  ]

  props.expenses.forEach((e) => {
    chartDataPoints[e.date.getMonth()].value += e.amount
    // console.log(e.title + ' ' + e.date.getMonth() + ' ' + e.amount)
  })
  //   for (const e of props.expenses) {
  //     const expenseMonth = e.date.getMonth() //month 1월부터 0 시작
  //     chartDataPoints[expenseMonth].value += e.amount
  //   }

  return <Chart dataPoints={chartDataPoints}></Chart>
}

export default ExpenseChart
