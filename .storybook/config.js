import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const newViewports = {
  width1200: {
    name: 'Width_1200px',
    styles: {
      width: '1300px',
      height: '963px'
    }
  },
  width900: {
    name: 'Width_900px',
    styles: {
      width: '900px',
      height: '801px'
    }
  },
  width800: {
    name: 'Width_800px',
    styles: {
      width: '800px',
      height: '801px'
    }
  }
};

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...newViewports
  }
});
