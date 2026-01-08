import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../stores/reducers/cart'
import { RootReducer } from '../../stores'

import imageFundo from '../../assets/images/fundoHeader.svg'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

export const HeaderPrincipal = () => (
  <S.FundoHeader style={{ backgroundImage: `url(${imageFundo})` }}>
    <S.Logo style={{ backgroundImage: `url(${logo})` }}></S.Logo>
    <S.Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </S.Title>
  </S.FundoHeader>
)

export const HeaderFoods = () => {
  const { itemsCardapio } = useSelector((states: RootReducer) => states.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.FundoHeaderFoods style={{ backgroundImage: `url(${imageFundo})` }}>
      <S.ContainerHeaderFoods>
        <S.TextFood to={'/'}>Restaurantes</S.TextFood>
        <S.LogoFoods style={{ backgroundImage: `url(${logo})` }}></S.LogoFoods>
        <S.TextFoodButton type="button" onClick={openCart}>
          {itemsCardapio.length} Produto(s) no carrinho
        </S.TextFoodButton>
      </S.ContainerHeaderFoods>
    </S.FundoHeaderFoods>
  )
}
