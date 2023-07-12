import CharBar from 'components/Chart/ChartBar'
import './Chart.css'
// import { ExpensesParam } from 'dataType/commonType'

type ChartDataPoint = {
  label: string
  value: number
}

const Chart = (props: { dataPoints: ChartDataPoint[] }) => {
  const dataPointValues = props.dataPoints.map((dp) => dp.value)
  const totalMaximum = Math.max(...dataPointValues)
  //   console.log(totalMaximum)
  //   console.log(...props.dataPoints)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
