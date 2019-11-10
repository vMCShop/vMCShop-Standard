import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import { Paper } from '@/common/components/Paper';
import { Card, CardContent, CardImage, CardHeader, CardBody, CardFooter } from '@/common/components/Card';
import { TextButton } from '@/common/components/Button';
import { Paragraph } from '@/common/Paragraph';

const stories = storiesOf('Cards', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

const Wrapper = styled.div`
  max-width: ${({ width }) => width && `${width}px`};
`;

stories.add('Classic', () => {
  const withBorder = boolean('Card footer — top border', false);
  const alignContentRight = boolean('Card footer — align content right', true);

  return (
    <Wrapper width={500}>
      <Card>
        <CardBody>
          <CardHeader>Card Title</CardHeader>
          <Paragraph>
            Experiment technically like a seismic processor. This stigma has only been transfered by a quirky starship.
            When the species experiments for nowhere, all astronauts assimilate collective, extraterrestrial sensors.
          </Paragraph>
        </CardBody>
        <CardFooter withBorder={withBorder} alignContentRight={alignContentRight}>
          <TextButton>Button</TextButton>
        </CardFooter>
      </Card>
    </Wrapper>
  );
});

stories.add('Paper', () => {
  const withPadding = boolean('Paper with padding', true);

  return (
    <Wrapper width={500}>
      <Paper withPadding={withPadding}>
        Experiment technically like a seismic processor. This stigma has only been transfered by a quirky starship. When
        the species experiments for nowhere, all astronauts assimilate collective, extraterrestrial sensors.
      </Paper>
    </Wrapper>
  );
});

stories.add('Image', () => {
  const availableImagePositions = {
    Left: 'left',
    Right: 'right',
    Top: 'top',
  };

  const withImage = boolean('Card with image', true);
  const imagePosition = select('Card image — position', availableImagePositions, 'left');
  const withBorder = boolean('Card footer — top border', false);
  const alignContentRight = boolean('Card footer — align content right', true);

  return (
    <Wrapper width={withImage && imagePosition === 'top' ? 300 : 700}>
      <Card withImage={withImage} imagePosition={imagePosition}>
        <CardImage className="card-image" src="https://picsum.photos/500/500" alt="placeholder image" />
        <CardContent>
          <CardBody>
            <CardHeader>Card Title</CardHeader>
            <Paragraph>
              Experiment technically like a seismic processor. This stigma has only been transfered by a quirky
              starship. When the species experiments for nowhere, all astronauts assimilate collective, extraterrestrial
              sensors.
            </Paragraph>
          </CardBody>
          <CardFooter withBorder={withBorder} alignContentRight={alignContentRight}>
            <TextButton>Button</TextButton>
          </CardFooter>
        </CardContent>
      </Card>
    </Wrapper>
  );
});
