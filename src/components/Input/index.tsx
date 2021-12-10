import { x } from '@xstyled/styled-components'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  type: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  label,
  name,
  type,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <x.fieldset>
      <x.label htmlFor="url">{label}</x.label>
      <x.input
        p={4}
        my={2}
        name={name}
        value={value}
        onChange={onChange}
        minWidth="100%"
        borderRadius="md"
        boxShadow="md"
        type={type}
        placeholder="URL"
        {...props}
      />
    </x.fieldset>
  )
}

export default Input
