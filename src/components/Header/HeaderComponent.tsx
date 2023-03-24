import { Col, Row } from 'antd'
import {
  WrapperHeader,
  WrapperHeaderLink,
  WrapperHeaderListLink,
  WrapperHeaderMenuLink,
  WrapperLogoImage,
  WrapperLogoLink,
  WrapperTextHeader,
} from './style'
import {
  SmileOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import logo from '@/assets/logo.png'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'

const gutters: any = [6, 6]
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={2}>
          <WrapperTextHeader>
            <WrapperLogoLink to="#">
              <WrapperLogoImage src={logo} alt="Tiki Logo..." />
            </WrapperLogoLink>
          </WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            placeholder="Bạn tìm gì hôm nay...."
            textButton="Tìm kiếm"
            size="large"
          />
        </Col>
        <Col span={6}>
          <Row align="middle" gutter={gutters}>
            <WrapperHeaderMenuLink>
              <WrapperHeaderListLink>
                <HomeOutlined style={{ fontSize: '24px' }} />
                <WrapperHeaderLink to="/">Trang Chủ</WrapperHeaderLink>
              </WrapperHeaderListLink>
              <WrapperHeaderListLink>
                <SmileOutlined style={{ fontSize: '24px' }} />
                <WrapperHeaderLink to="">Tài khoản</WrapperHeaderLink>
              </WrapperHeaderListLink>
              <WrapperHeaderListLink>
                <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                <WrapperHeaderLink to="">Giỏ Hàng</WrapperHeaderLink>
              </WrapperHeaderListLink>
            </WrapperHeaderMenuLink>
          </Row>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent
