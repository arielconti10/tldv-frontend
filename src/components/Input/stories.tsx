import { Story, Meta } from '@storybook/react'

import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    label: "What's your name?",
    placeholder: 'Your name'
  }
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />
