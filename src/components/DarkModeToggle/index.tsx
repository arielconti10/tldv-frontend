import React from 'react'
import styled, { useColorMode } from '@xstyled/styled-components'
import Toggle from 'components/Toggle'

const InnerDarkModeToggle = styled.div`
  display: flex;

  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: #ffe600;
    cursor: pointer;
    transition: color 0.3s ease;
    &:last-child {
      color: #666;
    }

    &:focus {
      outline: none;
    }
  }
`

const DarkModeToggle = () => {
  const [mode, setColorMode] = useColorMode()

  return (
    <InnerDarkModeToggle>
      <button type="button" onClick={() => setColorMode('default')}>
        ☀
      </button>
      <Toggle
        checked={mode === 'dark'}
        onChange={() => setColorMode(mode === 'dark' ? 'default' : 'dark')}
      />
      <button type="button" onClick={() => setColorMode('dark')}>
        ☾
      </button>
    </InnerDarkModeToggle>
  )
}

export default DarkModeToggle
