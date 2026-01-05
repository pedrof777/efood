import Button from '../../Components/Button'
import * as S from './styles'

type Props = {
  onClick?: () => void
}

const Checkout = ({ onClick }: Props) => {
  return (
    <>
      <h3>Pagamento - Valor a pagar R$ 190,90</h3>
      <form>
        <S.ContainerInput>
          <label htmlFor="nameCard">Nome no cartão</label>
          <input id="nameCard" name="nameCard" type="text" />
        </S.ContainerInput>
        <S.ContainerInput className="containerRow">
          <div>
            <label htmlFor="numberCard">Número do cartão</label>
            <input id="numberCard" name="numberCard" type="text" />
          </div>
          <div className="containerCodeCard">
            <label htmlFor="cardCode">CVV</label>
            <input id="cardCode" name="cardCode" type="text" />
          </div>
        </S.ContainerInput>
        <S.ContainerInput className="containerRow">
          <div>
            <label htmlFor="expireMonth">Mês de vencimento</label>
            <input id="expireMonth" name="expireMonth" type="text" />
          </div>
          <div className="containerYearExpires">
            <label htmlFor="yearExpire">Ano de vencimento</label>
            <input id="yearExpire" name="yearExpire" type="text" />
          </div>
        </S.ContainerInput>

        <S.ContainerButton>
          <Button title="Finalizar pagamento" type="submit">
            Finalizar pagamento
          </Button>
          <Button
            onClick={onClick}
            title="Voltar para a edição de endereço"
            type="button"
          >
            Voltar para a edição de endereço
          </Button>
        </S.ContainerButton>
      </form>
    </>
  )
}

export default Checkout
