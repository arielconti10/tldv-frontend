import { Story, Meta } from '@storybook/react'

import Card, { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    children: 'Example card',
    bg: 'white'
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
