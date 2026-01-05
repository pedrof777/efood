import { useState } from 'react'
import Button from '../../Components/Button'
import * as S from './styles'
import Checkout from '../Checkout'

const Delivery = () => {
  const [delivery, setDelivery] = useState(true)

  return (
    <S.Container>
      {!delivery ? (
        <>
          <h3>Entrega</h3>
          <form>
            <S.ContainerInput>
              <label htmlFor="recipientDelivery">Quem irá receber</label>
              <input
                id="recipientDelivery"
                name="recipientDelivery"
                type="text"
              />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="address">Endereço</label>
              <input id="address" name="address" type="text" />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="city">Cidade</label>
              <input id="city" name="city" type="text" />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="postalCode">CEP</label>
              <input id="postalCode" name="postalCode" type="text" />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="numberHouse">Número</label>
              <input id="numberHouse" name="numberHouse" type="text" />
            </S.ContainerInput>
            <S.ContainerInput>
              <label htmlFor="complement">Complemento(opcional)</label>
              <input id="complement" name="complement" type="text" />
            </S.ContainerInput>
            <S.ContainerButton>
              <Button
                onClick={() => setDelivery(delivery)}
                title="Continuar com o pagamento"
                type="submit"
              >
                Continuar com o pagamento
              </Button>
              <Button title="Voltar para o carrinho" type="button">
                Voltar para o carrinho
              </Button>
            </S.ContainerButton>
          </form>
        </>
      ) : (
        <Checkout onClick={() => setDelivery(!delivery)} />
      )}
    </S.Container>
  )
}

export default Delivery
