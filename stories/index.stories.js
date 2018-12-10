import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withViewport } from '@storybook/addon-viewport';

import { Button, Welcome } from '@storybook/react/demo';
import ListingCard from '../src/components/ListingCard';
import ListingGrid from '../src/components/ListingGrid';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ),{ notes: 'A very simple component' })
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


var ul = [
  <ListingCard price="CA$65.00" title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
  <ListingCard title="Virgo Zodiac Constellation Ring. Virgo gift. Zodiac jewelry. Zodiac ring. Sterling Silver or Aluminum Constellation ring RTS" />,
]
let ll = <ListingGrid list={ul}/>
storiesOf('ListingCard', module)
  .addDecorator(withViewport('iphone6'))
  .add('Version 1', () => <ListingCard />)
  .add('Version 2', () => (
    <div style={{ width: '1060px' }}>
      {ll }
    </div>
  ));
