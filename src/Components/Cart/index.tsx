import {
  AsideContainer,
  CartContainer,
  CartItem,
  ContainerPrices,
  Overlay
} from './styles'

import pizza from '../../assets/images/pizzaMarguerita.png'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <AsideContainer>
        <ul>
          <CartItem>
            <img src={pizza} alt="Produto adicionado" />
            <div>
              <h3>Marguerita</h3>
              <p>R$65,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Produto adicionado" />
            <div>
              <h3>Marguerita</h3>
              <p>R$65,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Produto adicionado" />
            <div>
              <h3>Marguerita</h3>
              <p>R$65,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Produto adicionado" />
            <div>
              <h3>Marguerita</h3>
              <p>R$65,90</p>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} alt="Produto adicionado" />
            <div>
              <h3>Marguerita</h3>
              <p>R$65,90</p>
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
