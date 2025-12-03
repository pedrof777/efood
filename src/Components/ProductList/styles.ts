import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const ContainerProduct = styled.section`
  margin-top: 80px;
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: ${breakPoints.desktop}) {
    column-gap: unset;
    row-gap: 80px;
    justify-items: center;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 90px;
    margin-top: 40px;
  }
`
