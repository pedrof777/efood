import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { IMaskInput } from 'react-imask'

import Button from '../../Components/Button'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { formataValor, totalPrice } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../stores'
import { clear, close } from '../../stores/reducers/cart'
import { useNavigate } from 'react-router-dom'

type Props = {
  onClick?: () => void
}

const Checkout = ({ onClick }: Props) => {
  const { itemsCardapio } = useSelector((state: RootReducer) => state.cart)
  const [delivery, setDelivery] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      recipientDelivery: '',
      address: '',
      city: '',
      postalCode: '',
      numberHouse: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      cardCode: '',
      yearExpire: '',
      expireMonth: ''
    },
    validationSchema: Yup.object({
      recipientDelivery: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required(),
      address: Yup.string().required(),
      city: Yup.string().required(),
      postalCode: Yup.string().max(9).required(),
      numberHouse: Yup.string().required(),
      nameCard: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required(),
      numberCard: Yup.string().max(19).required(),
      cardCode: Yup.string().max(3).required(),
      yearExpire: Yup.string().max(2).required(),
      expireMonth: Yup.string().max(2).required()
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.recipientDelivery,
          adress: {
            city: values.city,
            complement: values.complement,
            number: Number(values.numberHouse),
            zipCode: values.postalCode,
            description: values.address
          }
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            name: values.nameCard,
            number: values.numberCard,
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.yearExpire)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 1
          }
        ]
      })
    }
  })

  const checkInputError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched
    return hasError
  }

  const finishCheckout = () => {
    dispatch(clear())
    dispatch(close())
    navigate('/')
  }

  return (
    <S.Container>
      {isSuccess && data ? (
        <>
          <div onClick={finishCheckout} className="overlay" />
          <div>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button onClick={finishCheckout} title="Concluir" type="button">
              Concluir
            </Button>
          </div>
        </>
      ) : (
        <form onSubmit={form.handleSubmit}>
          {!delivery ? (
            <>
              <h3>Entrega</h3>
              <S.ContainerInput>
                <label htmlFor="recipientDelivery">Quem irá receber</label>
                <input
                  id="recipientDelivery"
                  name="recipientDelivery"
                  type="text"
                  value={form.values.recipientDelivery}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputError('recipientDelivery') ? 'input-error' : ''
                  }
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('address') ? 'input-error' : ''}
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="city">Cidade</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={form.values.city}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('city') ? 'input-error' : ''}
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="postalCode">CEP</label>
                <IMaskInput
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  value={form.values.postalCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('postalCode') ? 'input-error' : ''}
                  mask="00000-000"
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="numberHouse">Número</label>
                <input
                  id="numberHouse"
                  name="numberHouse"
                  type="text"
                  value={form.values.numberHouse}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputError('numberHouse') ? 'input-error' : ''
                  }
                />
              </S.ContainerInput>
              <S.ContainerInput>
                <label htmlFor="complement">Complemento(opcional)</label>
                <input
                  id="complement"
                  name="complement"
                  type="text"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('complement') ? 'input-error' : ''}
                />
              </S.ContainerInput>
              <S.ContainerButton>
                {!form.values.postalCode || !form.values.numberHouse ? (
                  ''
                ) : (
                  <Button
                    onClick={() => setDelivery(!delivery)}
                    title="Continuar com o pagamento"
                    type="submit"
                  >
                    Continuar com o pagamento
                  </Button>
                )}
                <Button
                  onClick={onClick}
                  title="Voltar para o carrinho"
                  type="button"
                >
                  Voltar para o carrinho
                </Button>
              </S.ContainerButton>
            </>
          ) : (
            <>
              <h3>
                Pagamento - Valor a pagar{' '}
                <span>{formataValor(totalPrice(itemsCardapio))}</span>
              </h3>
              <S.ContainerInput>
                <label htmlFor="nameCard">Nome no cartão</label>
                <input
                  id="nameCard"
                  name="nameCard"
                  type="text"
                  value={form.values.nameCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputError('nameCard') ? 'input-error' : ''}
                />
              </S.ContainerInput>
              <S.ContainerInput className="containerRow">
                <div>
                  <label htmlFor="numberCard">Número do cartão</label>
                  <IMaskInput
                    id="numberCard"
                    name="numberCard"
                    type="text"
                    value={form.values.numberCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputError('numberCard') ? 'input-error' : ''
                    }
                    mask="0000-0000-0000-0000"
                  />
                </div>
                <div className="containerCodeCard">
                  <label htmlFor="cardCode">CVV</label>
                  <IMaskInput
                    id="cardCode"
                    name="cardCode"
                    type="text"
                    value={form.values.cardCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputError('cardCode') ? 'input-error' : ''}
                    mask="000"
                  />
                </div>
              </S.ContainerInput>
              <S.ContainerInput className="containerRow">
                <div>
                  <label htmlFor="expireMonth">Mês de vencimento</label>
                  <IMaskInput
                    id="expireMonth"
                    name="expireMonth"
                    type="text"
                    value={form.values.expireMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputError('expireMonth') ? 'input-error' : ''
                    }
                    mask="00"
                  />
                </div>
                <div className="containerYearExpires">
                  <label htmlFor="yearExpire">Ano de vencimento</label>
                  <IMaskInput
                    id="yearExpire"
                    name="yearExpire"
                    type="text"
                    value={form.values.yearExpire}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      checkInputError('expireMonth') ? 'input-error' : ''
                    }
                    mask="00"
                  />
                </div>
              </S.ContainerInput>
              <S.ContainerButton>
                {!form.values.nameCard ||
                !form.values.cardCode ||
                !form.values.yearExpire ? (
                  ''
                ) : (
                  <Button
                    onClick={form.handleSubmit}
                    title="Finalizar pagamento"
                    type="submit"
                  >
                    Finalizar pagamento
                  </Button>
                )}
                <Button
                  onClick={() => setDelivery(!delivery)}
                  title="Voltar para a edição de endereço"
                  type="button"
                >
                  Voltar para a edição de endereço
                </Button>
              </S.ContainerButton>
            </>
          )}
        </form>
      )}
    </S.Container>
  )
}

export default Checkout
