import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Paper } from '@/common/components/Paper';
import { Breadcrumbs, BreadcrumbsItem } from '@/common/components/Breadcrumbs';

const stories = storiesOf('Breadcrumbs', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('Classic', () => {
  return (
    <Router>
      <Route path="/test">
        <Paper withPadding>
          <Breadcrumbs>
            <BreadcrumbsItem to="https://google.com/" external>
              First item
            </BreadcrumbsItem>
            <BreadcrumbsItem to="/dashboard">Second item</BreadcrumbsItem>
            <BreadcrumbsItem to="/test">Third item</BreadcrumbsItem>
          </Breadcrumbs>
        </Paper>
      </Route>
    </Router>
  );
});
