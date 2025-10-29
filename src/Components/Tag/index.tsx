import { ReactNode } from 'react'

import { TagContainer } from './styles'

export type Props = {
  position?: 'primary' | 'secondary'
  children: ReactNode
}

const Tag = ({ children, position }: Props) => (
  <TagContainer position={position}>{children}</TagContainer>
)

export default Tag
