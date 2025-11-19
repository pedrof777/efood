import { HeaderFoods } from '../../Components/Header'
import SaibaMaisList from '../../Components/SaibaMaisList'
import { useEffect, useState } from 'react'
import { Food } from '../Home'
import { useParams } from 'react-router-dom'

const SaibaMais = () => {
  const { id } = useParams()

  const [restaurantes, setRestaurante] = useState<Food | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((lista: Food[]) => {
        const item = lista.find((r) => r.id === Number(id))
        setRestaurante(item || null)
      })
  }, [id])

  return (
    <>
      <HeaderFoods />
      {restaurantes ? (
        <SaibaMaisList foods={restaurantes} />
      ) : (
        <h3>Carregando...</h3>
      )}
    </>
  )
}

export default SaibaMais
