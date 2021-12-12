import { x } from '@xstyled/styled-components'

const Footer = () => (
  <x.div
    color="cool-gray-200"
    fontWeight="light"
    display="flex"
    flex="1"
    alignItems="flex-end"
  >
    Made with ❤️ by{' '}
    <x.a
      href="https://github.com/arielconti10"
      target="_blank"
      color="link"
      rel="norefer noopener"
      textDecoration={{ hover: 'underline' }}
    >
      Ariel Conti
    </x.a>
  </x.div>
)

export default Footer
