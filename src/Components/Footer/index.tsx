import {
  ContainerFooter,
  ContainerLogo,
  ContainerSocial,
  ContainerText
} from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <ContainerFooter>
    <ContainerLogo>
      <img src={logo} alt="logo" />
    </ContainerLogo>
    <ContainerSocial>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </ContainerSocial>
    <ContainerText>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </ContainerText>
  </ContainerFooter>
)

export default Footer
