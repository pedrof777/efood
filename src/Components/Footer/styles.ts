import styled from 'styled-components'
import { Cores } from '../../styles'

export const ContainerFooter = styled.footer`
  background-color: ${Cores.laranjaMedio};
  text-align: center;
`

export const ContainerLogo = styled.div`
  padding-top: 40px;
  padding-bottom: 32.5px;
`
export const ContainerSocial = styled.div`
  margin-bottom: 80px;

  img:nth-of-type(2) {
    padding: 0 8px;
  }
`

export const ContainerText = styled.div`
  padding-bottom: 40px;

  p {
    font-size: 10px;
    color: ${Cores.laranja};
    text-align: center;
  }
`
