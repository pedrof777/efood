import styled from 'styled-components'
import { Cores } from '../../styles'

export const FundoHeader = styled.div`
  height: 384px;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`

export const Logo = styled.div`
  width: 125px;
  height: 57px;
  margin-top: 40px;
`

export const Title = styled.p`
  color: ${Cores.laranja};
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`
