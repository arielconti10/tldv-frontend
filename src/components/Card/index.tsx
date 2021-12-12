import { x, SystemProps } from '@xstyled/styled-components'

export type CardProps = {
  children: React.ReactNode
} & SystemProps

const Card = ({ children, ...props }: CardProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      fontSize="sm"
      fontWeight="medium"
      borderRadius="md"
      py={3}
      boxShadow="lg"
      {...props}
    >
      {children}
    </x.div>
  )
}

export default Card
