import React from 'react'
import styled from '@xstyled/styled-components'

const ToggleControl = styled.span`
  position: relative;
  padding: 0 1;
  display: flex;
  align-items: center;
`

const InputCheck = styled.input`
  width: 40px;
  height: 10px;
  background: #555;
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: #f6f6f6;
  }
`

interface ToggleProps {
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const Toggle = ({ checked, onChange, name = 'dmcheck' }: ToggleProps) => {
  return (
    <ToggleControl>
      <InputCheck
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="dmcheck"
        name={name}
      />
      <label htmlFor="dmcheck" />
    </ToggleControl>
  )
}

export default Toggle
