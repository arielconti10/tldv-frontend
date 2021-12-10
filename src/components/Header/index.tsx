import { x } from '@xstyled/styled-components'

const Header = () => {
  return (
    <x.header
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      minWidth="100vw"
      px={10}
      my={5}
    >
      <x.h1 fontSize="3xl" fontFamily="sans-serif" fontWeight="bolder">
        <x.img src="/img/tldv-logo.svg" width={124} height={48} />
      </x.h1>
    </x.header>
  )
}

export default Header
