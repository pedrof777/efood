import * as S from './styles'
import { ButtonLink } from '../Button/styles'
import { TagContainer } from '../Tag/styles'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  image: string
  category: string
  info?: string
  name: string
  avaliation: string
  description: string
}

const Produto = ({
  avaliation,
  category,
  description,
  image,
  info,
  name
}: Props) => (
  <div className="container">
    <S.ContainerCard>
      <S.ContainerImg>
        <img src={image} alt="sushi" />
      </S.ContainerImg>
      <S.Infos>
        {info && <TagContainer position="primary">{info}</TagContainer>}
        <TagContainer position="secondary">{category}</TagContainer>
      </S.Infos>
      <S.Card>
        <S.ContainerTitle>
          <S.Title>{name}</S.Title>
          <S.ContainerAvaliacao>
            <p>{avaliation}</p>
            <img src={estrela} alt="estrela" />
          </S.ContainerAvaliacao>
        </S.ContainerTitle>
        <S.TextCard style={{ whiteSpace: 'pre-line' }}>
          {description}
        </S.TextCard>
        <ButtonLink title={'Saiba mais'} to={'/saibamais'}>
          Saiba mais
        </ButtonLink>
      </S.Card>
    </S.ContainerCard>
  </div>
)

export default Produto
