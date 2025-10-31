import { HeaderPrincipal } from '../../Components/Header'
import Productlist from '../../Components/ProductList'
import Food from '../../models/Food'
import sushi from '../../assets/images/sushi.png'
import macarrao from '../../assets/images/macarrao.png'

export const restaurantes: Food[] = [
  {
    id: 1,
    avaliation: '4.9',
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \n Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    name: 'Hioki Sushi',
    infos: 'Destaque da semana'
  },
  {
    id: 2,
    avaliation: '4.9',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    name: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    avaliation: '4.9',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    name: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    avaliation: '4.9',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    name: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    avaliation: '4.9',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    name: 'La Dolce Vita Trattoria'
  },
  {
    id: 2,
    avaliation: '4.9',
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao,
    name: 'La Dolce Vita Trattoria'
  }
]

const Home = () => (
  <>
    <HeaderPrincipal />
    <Productlist foods={restaurantes} />
  </>
)

export default Home
