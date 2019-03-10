/**
 *
 * SidebarFilterGroup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  float: left;
  padding-left: 18px;
  padding-right: 18px;
  position: relative;
`;

const WrapperContainer = styled.div`
  width: 250px;
  // width: 100%;
  float: left;
`;

const WrapperInner = styled.div`
  border-radius: 3px;
  background-color: #FFF;
  border: 1px solid #E1E3DF;
  border-bottom-color: #CBCCC9;
  margin: 0 0 12px;

  @media only screen and (min-width: 0) {
    padding: 12px;
  }
  @media only screen and (min-width: 0) {
    margin-bottom: 24px;
  }
`;


/* eslint-disable react/prefer-stateless-function */
class SidebarFilterGroup extends React.Component {
  render() {
    return (
      <Wrapper className="sidebar-filter-group">
        <WrapperContainer>
          <WrapperInner>
            <form>
            <ul>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
              <li>Option I</li>
            </ul>
            </form>
          </WrapperInner>
        </WrapperContainer>
      {/*<div>
        <FormattedMessage {...messages.header} />
      </div>*/}
      </Wrapper>
    );
  }
}

SidebarFilterGroup.propTypes = {};

export default SidebarFilterGroup;
