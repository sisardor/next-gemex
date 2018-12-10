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
    let href = '/cat/' + item.path.replace(/\./g, '/')
    return (<Li key={i}>
      <Span/>
      <Link href={href}>
        <a>{item.name}</a>
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
