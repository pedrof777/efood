import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const Section = styled.section`
  .container {
    @media (max-width: ${breakPoints.desktop}) {
      max-width: 80%;
    }
  }
`

export const FundoImg = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const ContainerTitle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0px 32px 0px;
`

export const TitleCategory = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: #fff;
`

export const NameRestaurante = styled.p`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
`
export const ListProduct = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 120px 0;

  @media (max-width: ${breakPoints.desktop}) {
    gap: 25px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
