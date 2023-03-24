import { Row } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const WrapperHeader = styled(Row)`
  margin: auto;
  padding: 10px 0;
  background-color: #fff;
  align-items: center;
  width: 1440px;
`
export const WrapperLogoLink = styled(Link)`
  display: inline-block;
  width: 57px;
  height: 40px;
`
export const WrapperLogoImage = styled.img`
  width: 100%;
  height: 100%;
`
export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`
export const WrapperHeaderMenuLink = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
`
export const WrapperHeaderListLink = styled.li `
  display: flex;
  align-items: center;
`
export const WrapperHeaderLink = styled(NavLink)`
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgb(128, 128, 137);
`
export const WrapperText = styled.p `
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgb(128, 128, 137);
`