import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerCard = styled.div`
  width: 472px;
  height: 398px;
  position: relative;
`
export const ContainerImg = styled.div`
  width: 472px;
  height: 217px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Card = styled.div`
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: ${Cores.laranja};
  padding: 8px;
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
export const Title = styled.p`
  color: ${Cores.laranja};
  font-weight: bold;
  font-size: 18px;
`

export const ContainerAvaliacao = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 8px;
    color: ${Cores.laranja};
    font-weight: bold;
    font-size: 18px;
  }
`

export const TextCard = styled.p`
  color: ${Cores.laranja};
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 22px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
