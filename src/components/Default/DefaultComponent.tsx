import React from 'react'
import HeaderComponent from '../Header/HeaderComponent'

interface Props {
  children?: JSX.Element | React.ReactNode
}
const DefaultComponent = ({ children }: Props) => {
  return (
    <div>
      <HeaderComponent />
      {children}
    </div>
  )
}

export default DefaultComponent
