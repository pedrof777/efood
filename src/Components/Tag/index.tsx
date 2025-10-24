import { TagContainer } from './styles'

export type Props = {
  position?: 'primary' | 'secondary'
  children: string
}

const Tag = ({ children, position }: Props) => (
  <TagContainer position={position}>{children}</TagContainer>
)

export default Tag
