import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
  })
);

function loadStories() {
  require('../stories/');
}

configure(loadStories, module);
