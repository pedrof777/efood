import { HeaderFoods } from '../../Components/Header'
import SaibaMaisList from '../../Components/SaibaMaisList'
import { useParams } from 'react-router-dom'
import Cart from '../../Components/Cart'
import { useGetRestaurantQuery } from '../../services/api'

const SaibaMais = () => {
  const { id } = useParams()

  const { data: restaurantes, isLoading } = useGetRestaurantQuery(id!)

  if (isLoading) return <h3>Carregando...</h3>
  if (!restaurantes) return <h3>Restaurante não encontrado</h3>

  return (
    <>
      <HeaderFoods />
      <>
        <SaibaMaisList foods={restaurantes} cardapio={restaurantes.cardapio} />
        <Cart />
      </>
    </>
  )
}

export default SaibaMais
