import Food from '../../models/Food'
import SaibaMaisProduct from '../SaibaMaisProduct'
import {
  ContainerTitle,
  FundoImg,
  ListProduct,
  NameRestaurante,
  TitleCategory
} from './styles'

type Props = {
  foods: Food[]
}

const SaibaMaisList = ({ foods }: Props) => {
  return (
    <>
      <section>
        <FundoImg>
          <ContainerTitle className="container">
            <TitleCategory>Italiana</TitleCategory>
            <NameRestaurante>La Dolce Vita Trattoria</NameRestaurante>
          </ContainerTitle>
        </FundoImg>
        <div className="container">
          <ListProduct>
            {foods.map((food) => (
              <SaibaMaisProduct
                key={food.id}
                description={food.description}
                image={food.image}
                title={food.name}
              />
            ))}
          </ListProduct>
        </div>
      </section>
    </>
  )
}

export default SaibaMaisList
