import { WrapperText } from '../Header/style'

interface Props {
  name?: string
}
const TypeProduct = ({ name }: Props) => {
  return <WrapperText>{name}</WrapperText>
}

export default TypeProduct
