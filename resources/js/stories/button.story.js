import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';

import { Button, OutlinedButton, TextButton, IconButton } from '@/common/components/Button';

const stories = storiesOf('Buttons', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

const availableColor = {
  Default: 'default',
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Info: 'info',
  Warning: 'warning',
  Danger: 'danger',
};

const availableSizes = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

const availableIconPositions = {
  Left: 'left',
  Right: 'right',
  Disabled: 'disabled',
};

stories.add('Classic', () => {
  const content = text('Content', 'Button');
  const color = select('Color', availableColor, 'default');
  const size = select('Size', availableSizes, 'md');
  const icon = radios('Icon', availableIconPositions, 'disabled');
  const disabled = boolean('Disabled', false);

  return (
    <Button
      color={color}
      size={size}
      withLeftIcon={icon === 'left' && faFortAwesomeAlt}
      withRightIcon={icon === 'right' && faFortAwesomeAlt}
      disabled={disabled}
    >
      {content}
    </Button>
  );
});

stories.add('Outlined', () => {
  const content = text('Content', 'Button');
  const color = select('Color', availableColor, 'default');
  const size = select('Size', availableSizes, 'md');
  const icon = radios('Icon', availableIconPositions, 'disabled');
  const disabled = boolean('Disabled', false);

  return (
    <OutlinedButton
      color={color}
      size={size}
      withLeftIcon={icon === 'left' && faFortAwesomeAlt}
      withRightIcon={icon === 'right' && faFortAwesomeAlt}
      disabled={disabled}
    >
      {content}
    </OutlinedButton>
  );
});

stories.add('Text', () => {
  const content = text('Content', 'Button');
  const color = select('Color', availableColor, 'default');
  const size = select('Size', availableSizes, 'md');
  const icon = radios('Icon', availableIconPositions, 'disabled');
  const disabled = boolean('Disabled', false);

  return (
    <TextButton
      color={color}
      size={size}
      withLeftIcon={icon === 'left' && faFortAwesomeAlt}
      withRightIcon={icon === 'right' && faFortAwesomeAlt}
      disabled={disabled}
    >
      {content}
    </TextButton>
  );
});

stories.add('Icon', () => {
  const color = select('Color', availableColor, 'default');
  const size = select('Size', availableSizes, 'md');
  const disabled = boolean('Disabled', false);

  return <IconButton color={color} size={size} disabled={disabled} icon={faFortAwesomeAlt} />;
});
