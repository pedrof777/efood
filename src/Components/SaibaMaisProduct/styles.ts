import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerProduct = styled.div`
  background-color: ${Cores.laranja};
`
export const ContainerImg = styled.div`
  width: 304px;
  height: 167px;
  margin: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`
export const ContainerInfo = styled.div`
  margin: 0 8px 8px 8px;
`

export const TitleInfo = styled.p`
  font-size: 16px;
  font-weight: 900;
  color: ${Cores.laranjaMedio};
`
export const Description = styled(TitleInfo)`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0;
`

export const Button = styled.button`
  background-color: ${Cores.laranjaMedio};
  color: ${Cores.laranja};
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 4px 0;
`
