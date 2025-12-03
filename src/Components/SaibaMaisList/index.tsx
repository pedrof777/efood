import { Food, MenuFood } from '../../pages/Home'
import SaibaMaisProduct from '../SaibaMaisProduct'
import {
  ContainerTitle,
  FundoImg,
  ListProduct,
  NameRestaurante,
  Section,
  TitleCategory
} from './styles'

type Props = {
  foods: Food
  cardapio: MenuFood[]
}

export const formataValor = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const SaibaMaisList = ({ foods, cardapio }: Props) => {
  if (!foods || !foods.cardapio) {
    return null
  }
  return (
    <>
      <Section>
        <FundoImg
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(${foods.capa})`
          }}
        >
          <ContainerTitle className="container">
            <TitleCategory>{foods.tipo}</TitleCategory>
            <NameRestaurante>{foods.titulo}</NameRestaurante>
          </ContainerTitle>
        </FundoImg>
        <div className="container">
          <ListProduct>
            {cardapio.map((items) => (
              <SaibaMaisProduct
                menuCard={items}
                key={items.id}
                description={items.descricao}
                image={items.foto}
                title={items.nome}
                porcao={items.porcao}
                preco={formataValor(items.preco)}
              />
            ))}
          </ListProduct>
        </div>
      </Section>
    </>
  )
}

export default SaibaMaisList
