import { HeaderFoods } from '../../Components/Header'
import SaibaMaisList from '../../Components/SaibaMaisList'
import Food from '../../models/Food'
import pizza from '../../assets/images/pizzaMarguerita.png'

const comidas: Food[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    avaliation: '0',
    category: 'Japonesa',
    name: 'Pizza Marguerita '
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    avaliation: '0',
    category: 'Japonesa',
    name: 'Pizza Marguerita '
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    avaliation: '0',
    category: 'Japonesa',
    name: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    avaliation: '0',
    category: 'Japonesa',
    name: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    avaliation: '0',
    category: 'Japonesa',
    name: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    avaliation: '0',
    category: 'Japonesa',
    name: 'Pizza Marguerita'
  }
]

const SaibaMais = () => (
  <>
    <HeaderFoods />
    <SaibaMaisList foods={comidas} />
  </>
)

export default SaibaMais
