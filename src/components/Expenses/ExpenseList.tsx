import { ReactElement, useState } from 'react'
import { ExpensesParam } from 'dataType/commonType'
import { ExpenseItem } from './ExpenseItem'
// function ExpenseList(props: ExpensesParam) {
//     return <div></div>
//  }

const ExpenseList = (props: { contentList: ExpensesParam[] }) => {
    
    let filteredContent : ReactElement | ReactElement[] = <p>일치하는 조회결과가 없습니다</p>

    if (props.contentList.length > 0) {
      filteredContent =  props.contentList.map((exp) => {
        return <ExpenseItem key={exp.id} value={exp} />
      })
    }

    return <div>
              {filteredContent}

    </div>
}

export default ExpenseList
