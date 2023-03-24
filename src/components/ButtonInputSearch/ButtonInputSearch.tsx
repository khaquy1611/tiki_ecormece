import { SearchOutlined } from '@ant-design/icons'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import InputComponent from '../InputComponents'
import ButtonComponents from '../ButtonComponents'

interface Props {
  size?: SizeType
  placeholder?: string
  textButton?: string
  backgroundColorButton?: string
  colorButton?: string
}
const ButtonInputSearch = ({
  size,
  placeholder,
  textButton,
  backgroundColorButton = 'rgb(13,92,182)',
  colorButton = '#fff',
}: Props) => {
  return (
    <div
      style={{ display: 'flex', backgroundColor: '#fff', position: 'relative' }}
    >
      <InputComponent
        size={size}
        prefix={<SearchOutlined />}
        placeholder={placeholder}
        style={{ backgroundColor: '#fff' }}
      />
      <ButtonComponents
        style={{
          border: 'none',
          background: backgroundColorButton,
          color: colorButton,
          position: 'absolute',
          top: 0,
          zIndex: '99999',
          right: 0,
        }}
        size={size}
      >
        {textButton}
      </ButtonComponents>
    </div>
  )
}

export default ButtonInputSearch
