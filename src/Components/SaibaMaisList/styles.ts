import styled from 'styled-components'

import fundoSaibaMais from '../../assets/images/fundoSaibaMais.png'

export const FundoImg = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${fundoSaibaMais});
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
export const ListProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 120px 0;
`
