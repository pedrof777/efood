import { HeaderFoods } from '../../Components/Header'
import SaibaMaisList from '../../Components/SaibaMaisList'
import { useParams } from 'react-router-dom'
import Cart from '../../Components/Cart'
import { useGetRestaurantQuery } from '../../services/api'

const SaibaMais = () => {
  const { id } = useParams()

  const { data: restaurantes } = useGetRestaurantQuery(id!)

  return (
    <>
      <HeaderFoods />
      {restaurantes ? (
        <>
          <SaibaMaisList foods={restaurantes} />
          <Cart />
        </>
      ) : (
        <h3>Carregando...</h3>
      )}
    </>
  )
}

export default SaibaMais
