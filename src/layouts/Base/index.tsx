import { PropsWithChildren } from 'react'

import { x, SystemProps } from '@xstyled/styled-components'

import Footer from 'components/Footer'
import Header from 'components/Header'

type BaseLayoutProps = SystemProps

const BaseLayout = ({
  children,
  ...props
}: PropsWithChildren<BaseLayoutProps>) => {
  return (
    <>
      <x.main
        display="flex"
        minH="100vh"
        h="fit-content"
        justifyContent="flex-start"
        alignItems="center"
        {...props}
      >
        <Header />

        {children}
        <Footer />
      </x.main>
    </>
  )
}

export default BaseLayout
