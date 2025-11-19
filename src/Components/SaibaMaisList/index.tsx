import { Food } from '../../pages/Home'
import SaibaMaisProduct from '../SaibaMaisProduct'
import {
  ContainerTitle,
  FundoImg,
  ListProduct,
  NameRestaurante,
  TitleCategory
} from './styles'

type Props = {
  foods: Food
}

export const formataValor = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const SaibaMaisList = ({ foods }: Props) => {
  if (!foods || !foods.cardapio) {
    return null
  }
  return (
    <>
      <section>
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
            {foods.cardapio.map((food) => (
              <SaibaMaisProduct
                key={food.id}
                description={food.descricao}
                image={food.foto}
                title={food.nome}
                porcao={food.porcao}
                preco={formataValor(food.preco)}
              />
            ))}
          </ListProduct>
        </div>
      </section>
    </>
  )
}

export default SaibaMaisList
