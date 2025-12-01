import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Button,
  ButtonModal,
  Close,
  ContainerImg,
  ContainerInfo,
  ContainerProduct,
  Description,
  Modal,
  ModalContent,
  ModalImg,
  ModalText,
  TitleInfo
} from './styles'

import close from '../../assets/images/close.png'
import { open, addToCart } from '../../stores/reducers/cart'
import { MenuFood } from '../../pages/Home'

type Props = {
  menuCard?: MenuFood
  image: string
  title: string
  description: string
  porcao: string
  preco: number | string
}

const SaibaMaisProduct = ({
  description,
  image,
  title,
  porcao,
  preco,
  menuCard
}: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(addToCart(menuCard!))
    dispatch(open())
  }

  return (
    <>
      <ContainerProduct>
        <ContainerImg>
          <img src={image} alt="pizza " />
        </ContainerImg>
        <ContainerInfo>
          <TitleInfo>{title}</TitleInfo>
          <Description>{description}</Description>
          <Button onClick={() => setModalAberto(true)}>
            Adicionar ao carrinho
          </Button>
        </ContainerInfo>
      </ContainerProduct>
      {modalAberto && (
        <Modal>
          <ModalContent>
            <Close onClick={() => setModalAberto(false)}>
              <img src={close} alt="Botao de fechar" />
            </Close>
            <ModalImg>
              <img src={image} alt="pizza" />
            </ModalImg>
            <ModalText>
              <p>{title}</p>
              <p>
                {description}
                <br />
                <br />
                <span>Serve: {porcao}</span>
              </p>
              <ButtonModal type="button" onClick={addCart}>
                Adicionar ao carrinho - <span>{preco}</span>
              </ButtonModal>
            </ModalText>
          </ModalContent>
          <div onClick={() => setModalAberto(false)} className="overlay"></div>
        </Modal>
      )}
    </>
  )
}

export default SaibaMaisProduct
