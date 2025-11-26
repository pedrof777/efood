import {
  AsideContainer,
  CartContainer,
  CartItem,
  ContainerPrices,
  Overlay
} from './styles'

import pizza from '../../assets/images/pizzaMarguerita.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../stores'
import { close } from '../../stores/reducers/cart'
import { formataValor } from '../SaibaMaisList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <AsideContainer>
        <ul>
          <CartItem key={''}>
            <img src={''} alt="Produto adicionado" />
            <div>
              <h3>{'c.nome'}</h3>
              <p>{formataValor(1)} </p>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <ContainerPrices>
          <p>
            Valor total <span>R$ 182,70</span>
          </p>
          <button type="button">Continuar com a entrega</button>
        </ContainerPrices>
      </AsideContainer>
    </CartContainer>
  )
}

export default Cart
