import Food from '../../models/Food'
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
          avaliation={food.avaliation}
          category={food.category}
          description={food.description}
          image={food.image}
          info={food.infos}
          name={food.name}
        />
      ))}
    </ContainerProduct>
  </div>
)

export default Productlist
