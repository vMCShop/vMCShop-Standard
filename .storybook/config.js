import { addParameters, configure } from '@storybook/react';
import theme from './theme';

function loadStories() {
  require("../resources/js/stories");
}

addParameters({
  options: {
    theme: theme
  }
});

configure(loadStories, module);
