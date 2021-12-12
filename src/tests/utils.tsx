import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextRouter } from 'next/router'
import { ThemeProvider, ColorModeProvider } from '@xstyled/styled-components'
import theme from 'styles/theme'

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn()
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

export const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ColorModeProvider>
  </ThemeProvider>
)
