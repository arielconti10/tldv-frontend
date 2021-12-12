import { x } from '@xstyled/styled-components'

const Footer = () => (
  <x.div fontWeight="light" display="flex" flex="1" alignItems="flex-end">
    Made with ❤️ by
    <x.a
      href="https://github.com/arielconti10"
      target="_blank"
      color="link"
      rel="norefer noopener"
      textDecoration={{ hover: 'underline' }}
    >
      &nbsp;Ariel Conti
    </x.a>
  </x.div>
)

export default Footer
