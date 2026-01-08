import SaibaMaisProduct from '../SaibaMaisProduct'

import { Food, MenuFood } from '../../pages/Home'
import { formataValor } from '../../utils'

import * as S from './styles'

type Props = {
  foods: Food
  cardapio: MenuFood[]
}

const SaibaMaisList = ({ foods, cardapio }: Props) => {
  if (!foods || !foods.cardapio) {
    return null
  }
  return (
    <>
      <S.Section>
        <S.FundoImg
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(${foods.capa})`
          }}
        >
          <S.ContainerTitle className="container">
            <S.TitleCategory>{foods.tipo}</S.TitleCategory>
            <S.NameRestaurante>{foods.titulo}</S.NameRestaurante>
          </S.ContainerTitle>
        </S.FundoImg>
        <div className="container">
          <S.ListProduct>
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
          </S.ListProduct>
        </div>
      </S.Section>
    </>
  )
}

export default SaibaMaisList
