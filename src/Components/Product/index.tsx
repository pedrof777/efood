import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.svg'
import * as S from './styles'
import { ButtonLink } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

const Produto = () => (
  <div className="container">
    <S.ContainerCard>
      <S.ContainerImg>
        <img src={sushi} alt="sushi" />
      </S.ContainerImg>
      <S.Infos>
        <TagContainer position="primary">Destaque da semana</TagContainer>
        <TagContainer position="secondary">Japonesa</TagContainer>
      </S.Infos>
      <S.Card>
        <S.ContainerTitle>
          <S.Title>Hioki Sushi</S.Title>
          <S.ContainerAvaliacao>
            <p>4.9</p>
            <img src={estrela} alt="estrela" />
          </S.ContainerAvaliacao>
        </S.ContainerTitle>
        <S.TextCard>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.
          <br />
          Experimente o Japão sem sair do lar com nosso delivery!
        </S.TextCard>
        <ButtonLink title={'Saiba mais'} to={'/saibamais'}>
          Saiba mais
        </ButtonLink>
      </S.Card>
    </S.ContainerCard>
  </div>
)

export default Produto
