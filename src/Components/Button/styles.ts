import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Cores } from '../../styles'

export const ButtonDefault = styled.button`
  width: 70px;
  height: 16px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: ${Cores.laranjaMedio}
  backgorund-color: ${Cores.laranja}
`

export const ButtonLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 82px;
  height: 24px;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: ${Cores.laranjaMedio};
  background-color: ${Cores.laranja};
`
