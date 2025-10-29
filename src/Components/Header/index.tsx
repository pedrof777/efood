import imageFundo from '../../assets/images/fundoHeader.svg'
import logo from '../../assets/images/logo.svg'
import {
  FundoHeader,
  Logo,
  Title,
  FundoHeaderFoods,
  TextLeft,
  TextRight
} from './styles'

export const HeaderPrincipal = () => (
  <FundoHeader style={{ backgroundImage: `url(${imageFundo})` }}>
    <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </FundoHeader>
)

export const HeaderFoods = () => (
  <FundoHeaderFoods style={{ backgroundImage: `url(${imageFundo})` }}>
    <TextLeft to={'/'}>Restaurantes</TextLeft>
    <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
    <TextRight to={'/'}>0 Produto(s) no carrinho</TextRight>
  </FundoHeaderFoods>
)
