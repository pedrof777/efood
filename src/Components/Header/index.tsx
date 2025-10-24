import imageFundo from '../../assets/images/fundoHeader.svg'
import logo from '../../assets/images/logo.svg'
import { FundoHeader, Logo, Title } from './styles'

const Header = () => (
  <FundoHeader style={{ backgroundImage: `url(${imageFundo})` }}>
    <Logo style={{ backgroundImage: `url(${logo})` }}></Logo>
    <Title>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Title>
  </FundoHeader>
)

export default Header
