import {
  AsideContainer,
  CartContainer,
  CartItem,
  ContainerPrices,
  Overlay
} from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../stores'
import { close, removeToCart } from '../../stores/reducers/cart'
import { formataValor } from '../SaibaMaisList'

const Cart = () => {
  const { isOpen, itemsCardapio } = useSelector(
    (state: RootReducer) => state.cart
  )

  const totalPrice = () => {
    return itemsCardapio.reduce((acumulador, valorTotal) => {
      return (acumulador += valorTotal.preco)
    }, 0)
  }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removerProduct = (id: number) => {
    dispatch(removeToCart(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <AsideContainer>
        <ul>
          {itemsCardapio.length > 0 ? (
            itemsCardapio.map((card, idx) => (
              <CartItem key={`${card.id}-${idx}`}>
                <img src={card.foto} alt={card.nome} />
                <div>
                  <h3>{card.nome}</h3>
                  <p>{formataValor(card.preco)}</p>
                </div>
                <button type="button" onClick={() => removerProduct(card.id)} />
              </CartItem>
            ))
          ) : (
            <p>Não há produtos no Carrinho</p>
          )}
        </ul>
        <ContainerPrices>
          <p>
            Valor total <span>{formataValor(totalPrice())} </span>
          </p>
          <button type="button">Continuar com a entrega</button>
        </ContainerPrices>
      </AsideContainer>
    </CartContainer>
  )
}

export default Cart
