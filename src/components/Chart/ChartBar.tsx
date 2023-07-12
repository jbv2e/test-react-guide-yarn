import './ChartBar.css'
// import { ExpensesParam } from 'dataType/commonType'

type ChartBarParam = {
  key: string
  value: number
  maxValue: number
  label: Nullable<string>
  // max : number
}

const ChartBar = (props: ChartBarParam) => {
  let barFillHeight = '0%'

  if (props.maxValue > 0) {
    // console.log(props.value)
    // console.log(props.maxValue)
    console.log(Math.round(props.value / props.maxValue))
    barFillHeight = Math.round((float)props.value / props.maxValue) * 100 + '%'
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar
