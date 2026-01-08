import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.ContainerFooter>
    <S.ContainerLogo>
      <img src={logo} alt="logo" />
    </S.ContainerLogo>
    <S.ContainerSocial>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </S.ContainerSocial>
    <S.ContainerText>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.ContainerText>
  </S.ContainerFooter>
)

export default Footer
