import 'components/Card.css'
import { RequireType } from 'dataType/commonType'

function Card(props: RequireType) {
  console.log(props)
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
  //return <div className={classes}></div>
}

export default Card
