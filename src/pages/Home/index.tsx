import TypeProduct from '@/components/TypeProducts'
import { WrapperTypeProduct } from './style'
import { WrapperHeader } from '@/components/Header/style'
import Advertisement from '@/components/Advertisement'

const HomePage = () => {
  const arrCategory = [
    'trái cây',
    'thịt trứng',
    'rau củ quả',
    'hải sản',
    'gạo',
    'mì ăn liền',
    'đồ uống',
    'bia rượu',
    'bánh kẹo',
  ]
  return (
    <>
      <WrapperHeader style={{ padding: '0 110px' }}>
        <WrapperTypeProduct>
          {arrCategory.map((item: string) => {
            return <TypeProduct name={item} key={item} />
          })}
        </WrapperTypeProduct>
      </WrapperHeader>
      <Advertisement />
    </>
  )
}

export default HomePage
