import {
  Button,
  ContainerImg,
  ContainerInfo,
  ContainerProduct,
  Description,
  TitleInfo
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const SaibaMaisProduct = ({ description, image, title }: Props) => (
  <ContainerProduct>
    <ContainerImg>
      <img src={image} alt="pizza marguerita" />
    </ContainerImg>
    <ContainerInfo>
      <TitleInfo>{title}</TitleInfo>
      <Description>{description}</Description>
      <Button>Adicionar ao carrinho</Button>
    </ContainerInfo>
  </ContainerProduct>
)

export default SaibaMaisProduct
