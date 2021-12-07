/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components'
import '@xstyled/system'

import { ITheme } from '@xstyled/styled-components'

import theme from 'styles/theme'

type Theme = typeof theme

interface AppTheme extends ITheme, Theme {
  /* Customize your theme */
}

// and extend them!
declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
