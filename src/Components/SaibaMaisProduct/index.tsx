import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { open, addToCart } from '../../stores/reducers/cart'
import { MenuFood } from '../../pages/Home'

import close from '../../assets/images/close.png'

import * as S from './styles'

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
    if (menuCard) {
      dispatch(addToCart(menuCard))
      dispatch(open())
    }
  }

  return (
    <>
      <S.ContainerProduct>
        <S.ContainerImg>
          <img src={image} alt="pizza " />
        </S.ContainerImg>
        <S.ContainerInfo>
          <S.TitleInfo>{title}</S.TitleInfo>
          <S.Description>{description}</S.Description>
          <S.Button onClick={() => setModalAberto(true)}>
            Adicionar ao carrinho
          </S.Button>
        </S.ContainerInfo>
      </S.ContainerProduct>
      {modalAberto && (
        <S.Modal>
          <S.ModalContent>
            <S.Close onClick={() => setModalAberto(false)}>
              <img src={close} alt="Botao de fechar" />
            </S.Close>
            <S.ModalImg>
              <img src={image} alt="pizza" />
            </S.ModalImg>
            <S.ModalText>
              <S.ModalTitle>{title}</S.ModalTitle>
              <p>
                {description}
                <br />
                <br />
                <span>Serve: {porcao}</span>
              </p>
              <S.ButtonModal type="button" onClick={addCart}>
                Adicionar ao carrinho - <span>{preco}</span>
              </S.ButtonModal>
            </S.ModalText>
          </S.ModalContent>
          <div onClick={() => setModalAberto(false)} className="overlay"></div>
        </S.Modal>
      )}
    </>
  )
}

export default SaibaMaisProduct
