import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import { Paper } from '@/common/components/Paper';
import { ProgressBar } from '@/common/components/Loader';

const stories = storiesOf('Loaders', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Progress bar', () => {
  return (
    <Paper withPadding>
      <ProgressBar value={55} max={100} />
    </Paper>
  );
});
