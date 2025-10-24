import { ButtonDefault, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, title, type, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonDefault title={title} type="button" onClick={onClick}>
        {children}
      </ButtonDefault>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
