import Produto from '../Product'
import { ContainerProduct } from './styles'

const Productlist = () => (
  <div className="container">
    <ContainerProduct>
      <Produto />
      <Produto />
      <Produto />
      <Produto />
      <Produto />
      <Produto />
    </ContainerProduct>
  </div>
)

export default Productlist
