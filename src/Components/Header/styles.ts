import styled from 'styled-components'
import { Cores } from '../../styles'
import { Link } from 'react-router-dom'

export const FundoHeader = styled.header`
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
//HeaderFOODS
export const FundoHeaderFoods = styled(FundoHeader)`
  height: 186px;
  flex-direction: row;
`

export const ContainerHeaderFoods = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TextFood = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
  color: ${Cores.laranja};
`

export const LogoFoods = styled(Logo)`
  margin-top: 0px;
`
