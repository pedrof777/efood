import * as S from './styles'

const Delivery = () => {
  return (
    <div>
      <h3>Entrega</h3>
      <form>
        <div>
          <label htmlFor="recipientDelivery">Quem irá receber</label>
          <input id="recipientDelivery" name="recipientDelivery" type="text" />
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input id="address" name="address" type="text" />
        </div>
        <div>
          <label htmlFor="city">Cidade</label>
          <input id="city" name="city" type="text" />
        </div>
        <div>
          <label htmlFor="postalCode">CEP</label>
          <input id="postalCode" name="postalCode" type="text" />
        </div>
        <div>
          <label htmlFor="numberHouse">Número</label>
          <input id="numberHouse" name="numberHouse" type="text" />
        </div>
        <div>
          <label htmlFor="complement">Complemento(opcional)</label>
          <input id="complement" name="complement" type="text" />
        </div>
        <button>Continuar com o pagamento</button>
        <button>Voltar para o carrinho</button>
      </form>
    </div>
  )
}

export default Delivery
