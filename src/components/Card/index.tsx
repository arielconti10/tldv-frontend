import { x, SystemProps } from '@xstyled/styled-components'

export type CardProps = {
  children: React.ReactNode
} & SystemProps

const Card = ({ children, ...props }: CardProps) => {
  return (
    <x.div
      display="flex"
      flexDirection="column"
      bg={{ _: 'white' }}
      color={{ _: 'black' }}
      fontSize="sm"
      fontWeight="medium"
      borderRadius="md"
      px={4}
      py={3}
      boxShadow="lg"
      {...props}
    >
      {children}
    </x.div>
  )
}

export default Card
