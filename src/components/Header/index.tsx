import { x } from '@xstyled/styled-components'
import DarkModeToggle from 'components/DarkModeToggle'
import Image from 'next/image'

const Header = () => {
  return (
    <x.header
      display="flex"
      alignItems="flex-start"
      justifyContent="space-between"
      minWidth="100vw"
      px={10}
      my={5}
    >
      <x.h1 fontSize="3xl" fontFamily="sans-serif" fontWeight="bolder">
        <Image
          src="/img/tldv-logo.svg"
          color="#000"
          width={124}
          height={48}
          alt="TLDV logo"
        />
      </x.h1>

      <DarkModeToggle />
    </x.header>
  )
}

export default Header
