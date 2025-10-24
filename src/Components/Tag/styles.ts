import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  color: ${Cores.laranjaMedio};
  margin-right: ${(props) => (props.position === 'primary' ? '8px' : '0')};
  background-color: ${Cores.laranja};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: 700;
  display: inline-Block;
`
