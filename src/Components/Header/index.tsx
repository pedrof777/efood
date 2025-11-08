import imageFundo from '../../assets/images/fundoHeader.svg'
import logo from '../../assets/images/logo.svg'
import {
  FundoHeader,
  Logo,
  Title,
  FundoHeaderFoods,
  LogoFoods,
  TextFood,
  ContainerHeaderFoods
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
    <ContainerHeaderFoods>
      <TextFood to={'/'}>Restaurantes</TextFood>
      <LogoFoods style={{ backgroundImage: `url(${logo})` }}></LogoFoods>
      <TextFood to={'/'}>0 Produto(s) no carrinho</TextFood>
    </ContainerHeaderFoods>
  </FundoHeaderFoods>
)
