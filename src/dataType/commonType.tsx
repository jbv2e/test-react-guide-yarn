import React, { Children, ReactElement, ReactNode } from 'react'

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

export interface RequireType {
  children: ReactNode | ReactElement
  className: string
}
