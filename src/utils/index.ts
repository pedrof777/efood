import { MenuFood } from '../pages/Home'

export const totalPrice = (value: MenuFood[]) => {
  return value.reduce((acumulador, valorTotal) => {
    return (acumulador += valorTotal.preco)
  }, 0)
}

export const formataValor = (valor = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)
}
