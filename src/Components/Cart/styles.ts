import styled from 'styled-components'

import { breakPoints, Cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: none;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const AsideContainer = styled.aside`
  background-color: ${Cores.laranja};
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 32px 8px;

  @media (max-width: ${breakPoints.tablet}) {
    width: 80%;
  }

  ul {
    margin-bottom: 40px;
    overflow-y: auto;
    height: 90%;

    .emptyText {
      text-align: center;
    }
  }
`

export const CartItem = styled.li`
  background-color: ${Cores.laranjaMedio};
  display: flex;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    margin: 8px 0 16px 0;
    font-size: 18px;
    color: ${Cores.laranja};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${Cores.laranja};
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const ContainerPrices = styled.div`
  color: ${Cores.laranjaMedio};
  padding: 0 8px;

  p {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  button {
    max-width: 100%;
    width: 100%;
    padding: 4px 0;
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.laranja};
    border: none;
    background-color: ${Cores.laranjaMedio};
  }
`
