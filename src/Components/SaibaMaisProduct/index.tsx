import { useState } from 'react'

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

type Props = {
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
  preco
}: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

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
                <span>{porcao}</span>
              </p>
              <ButtonModal>
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
