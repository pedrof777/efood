import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import Checkout from '../../pages/Checkout'

import { RootReducer } from '../../stores'
import { close, removeToCart } from '../../stores/reducers/cart'
import { formataValor, totalPrice } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, itemsCardapio } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [finish, setFinish] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removerProduct = (id: number) => {
    dispatch(removeToCart(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.AsideContainer>
        {!finish ? (
          <>
            <ul>
              {itemsCardapio.length > 0 ? (
                itemsCardapio.map((card, idx) => (
                  <S.CartItem key={`${card.id}-${idx}`}>
                    <img src={card.foto} alt={card.nome} />
                    <div>
                      <h3>{card.nome}</h3>
                      <p>{formataValor(card.preco)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removerProduct(card.id)}
                    />
                  </S.CartItem>
                ))
              ) : (
                <li className="emptyText">Não há produtos no Carrinho</li>
              )}
            </ul>
            <S.ContainerPrices>
              {itemsCardapio.length > 0 && (
                <>
                  <p>
                    Valor total{' '}
                    <span>{formataValor(totalPrice(itemsCardapio))} </span>
                  </p>
                  <button
                    onClick={() => {
                      setFinish(!finish)
                    }}
                    type="button"
                  >
                    Continuar com a entrega
                  </button>
                </>
              )}
            </S.ContainerPrices>
          </>
        ) : (
          <Checkout onClick={() => setFinish(!finish)} />
        )}
      </S.AsideContainer>
    </S.CartContainer>
  )
}

export default Cart
