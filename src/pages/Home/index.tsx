import { HeaderPrincipal } from '../../Components/Header'
import Productlist from '../../Components/ProductList'
import { useGetRestaurantArrayQuery } from '../../services/api'

export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantArrayQuery()

  if (restaurantes) {
    return (
      <>
        <HeaderPrincipal />
        <Productlist foods={restaurantes} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
