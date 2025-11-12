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
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  display: flex;
  background-color: ${Cores.laranja};
`
export const ModalImg = styled.div`
  margin: 32px 24px 32px 32px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
export const ModalText = styled.div`
  color: #fff;
  margin: 32px 32px 0 0;

  p {
    margin: 16px 0;
    font-size: 14px;
    line-height: 22px;
  }
`
export const ButtonModal = styled(Button)`
  padding: 4px 7px;
  width: auto;
`

export const Close = styled.div`
  position: relative;
  left: 1000px;
  top: 8px;
  cursor: pointer;
`
