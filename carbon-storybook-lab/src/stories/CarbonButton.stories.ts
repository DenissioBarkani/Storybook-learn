import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@carbon/react';

const meta = {
  title: 'Carbon/Button',
  component: Button,

  tags: ['autodocs'],

  argTypes: {
    kind: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },

    disabled: {
      control: 'boolean',
    },

    children: {
      control: 'text',
    },
  },

  args: {
    children: 'Нажми меня',
    kind: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
