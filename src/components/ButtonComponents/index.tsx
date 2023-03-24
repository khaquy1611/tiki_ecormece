import { Button } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'

interface Props {
  size?: SizeType
  children?: string
  style?: any
}
const ButtonComponents = ({ size, style, children, ...rests }: Props) => {
  return (
    <Button style={style} size={size} {...rests}>
      {children}
    </Button>
  )
}

export default ButtonComponents
