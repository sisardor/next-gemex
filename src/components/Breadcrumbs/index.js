/**
 *
 * Breadcrumbs
 *
 */

import React from 'react';
import Link from 'next/link'
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Div = styled.div`
  padding-left: 36px;
`;

const Ul = styled.ul`
  float: left;
  list-style: none;
  padding-left: 0;
  margin-right: 6px;
`;
const Li = styled.li`
  display: inline-block;
  box-sizing: border-box;
  a {
    color: #595959;
  }
`;
const Span = styled.span`
  font-size: 7px;
  display: inline-block;
  font-size: 16px;
  text-decoration: none;
  vertical-align: middle;
  &:before {
    content: '▻';
  }
`;


function Breadcrumbs(props) {
  let count = <span>({props.count} items)</span>
  let lis = props.breadcrumbs.map((item, i) => {
    console.log('Length',  props.breadcrumbs.size - 1, i);
    if (props.breadcrumbs.size - 1 === i) {
      return (<Li key={i}><Span/><a>{item.get('name')}</a></Li>)
    }

    let path = item.get('path')
    return (<Li key={i}>
      <Span/>
      <Link
        as={`/cat/${path.replace(/\./g, '/')}`}
        href={{ pathname: '/cat', query: { path } }}
      >
        <a>{item.get('name')}</a>
      </Link>
    </Li>);
  })

  return (
    <Div>
      <Ul>
        <Li><Link href={'/'}>
          <a>Home</a>
        </Link></Li>
        {lis}
      </Ul>
      {count}
    </Div>
  );
}

Breadcrumbs.propTypes = {};

export default Breadcrumbs;
