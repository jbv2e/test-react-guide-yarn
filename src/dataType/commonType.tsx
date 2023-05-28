import { ReactElement, ReactNode } from 'react'

export interface ExpensesParam {
  id: string
  title: string
  amount: number
  date: Date
}

export interface ExpensesDate {
  id: string
  title: string
  amount: number
  date: Date
}

export interface CardParam {
  children?: ReactNode | ReactElement
  className?: string
  date?: Date
}
