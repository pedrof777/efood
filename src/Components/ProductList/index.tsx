import { Food } from '../../pages/Home'
import Produto from '../Product'
import { ContainerProduct } from './styles'

type Props = {
  foods: Food[]
}

const Productlist = ({ foods }: Props) => (
  <div className="container">
    <ContainerProduct>
      {foods.map((food) => (
        <Produto
          key={food.id}
          id={food.id}
          avaliation={food.avaliacao}
          category={food.tipo}
          description={food.descricao}
          image={food.capa}
          info={food.destacado}
          name={food.titulo}
        />
      ))}
    </ContainerProduct>
  </div>
)

export default Productlist
