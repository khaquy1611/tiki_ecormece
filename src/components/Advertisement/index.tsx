import { Row } from 'antd'
import freeShip from '../../assets/freeShip.png'
import { WrapperLogoImage } from '../Header/style'
import { WrapperContainer, WrapperLinkFreeShip } from './style'
const Advertisement = () => {
  return (
    <div style={{ width: '100%', backgroundColor: '#FFE880' }}>
      <WrapperContainer>
        <Row>
          <WrapperLinkFreeShip to="">
            <WrapperLogoImage src={freeShip} alt="" />
          </WrapperLinkFreeShip>
          <WrapperLinkFreeShip to="">
            <b>
              mọi đơn từ 149k. <span>Áp dụng cho cả TikiNOW 2h</span>
            </b>
          </WrapperLinkFreeShip>
        </Row>
      </WrapperContainer>
    </div>
  )
}

export default Advertisement
