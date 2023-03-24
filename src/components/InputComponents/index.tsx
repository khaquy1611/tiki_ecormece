import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import React, { ReactNode } from 'react'

interface Props {
  size?: SizeType
  placeholder?: string
  textButton?: string
  backgroundColorButton?: string
  colorButton?: string
  style?: any
  prefix?: ReactNode
}
const InputComponent = ({ size, placeholder, style, ...rests }: Props) => {
  return <Input size={size} placeholder={placeholder} {...rests} />
}

export default InputComponent
