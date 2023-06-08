import 'components/UI/Card.css'
import { CardParam } from 'dataType/commonType'

function Card(props: CardParam) {
  // console.log(props)
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
  //return <div className={classes}></div>
}

export default Card
