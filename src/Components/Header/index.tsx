import { useDispatch, useSelector } from 'react-redux'
import imageFundo from '../../assets/images/fundoHeader.svg'
import logo from '../../assets/images/logo.svg'
import {
  FundoHeader,
  Logo,
  Title,
  FundoHeaderFoods,
  LogoFoods,
  TextFood,
  ContainerHeaderFoods,
  TextFoodButton
} from './styles'
import { open } from '../../stores/reducers/cart'
import { RootReducer } from '../../stores'

export const HeaderPrincipal = () => (
  <FundoHeader style={{ backgroundImage: `url(${imageFundo})` }}>
    <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </FundoHeader>
)

export const HeaderFoods = () => {
  const { itemsCardapio } = useSelector((states: RootReducer) => states.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <FundoHeaderFoods style={{ backgroundImage: `url(${imageFundo})` }}>
      <ContainerHeaderFoods>
        <TextFood to={'/'}>Restaurantes</TextFood>
        <LogoFoods style={{ backgroundImage: `url(${logo})` }}></LogoFoods>
        <TextFoodButton type="button" onClick={openCart}>
          {itemsCardapio.length} Produto(s) no carrinho
        </TextFoodButton>
      </ContainerHeaderFoods>
    </FundoHeaderFoods>
  )
}
