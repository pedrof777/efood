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

import marguerita from '../../assets/images/pizzaMarguerita.png'
import close from '../../assets/images/close.png'

type Props = {
  image: string
  title: string
  description: string
}

const SaibaMaisProduct = ({ description, image, title }: Props) => {
  const [modalAberto, setModalAberto] = useState(false)

  return (
    <>
      <ContainerProduct>
        <ContainerImg>
          <img src={image} alt="pizza marguerita" />
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
              <img src={marguerita} alt="pizza" />
            </ModalImg>
            <ModalText>
              <p>Pizza Marguerita</p>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
                <br />
                <br />
                Serve: de 2 a 3 pessoas
              </p>
              <ButtonModal>Adicionar ao carrinho - R$ 69,90</ButtonModal>
            </ModalText>
          </ModalContent>
          <div onClick={() => setModalAberto(false)} className="overlay"></div>
        </Modal>
      )}
    </>
  )
}

export default SaibaMaisProduct
