import Link from 'next/link'

import { connect } from 'react-redux';
import { compose } from 'redux';
import fetch from 'isomorphic-unfetch'
import injectReducer from '../utils/injectReducer';
import Layout from '../components/MyLayout'

class Index extends React.Component {
  render () {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
      </Layout>
    );
  }
}






import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../utils/injectSaga';

const initialState = fromJS({});

function adminPageReducer(state = initialState, action) {
  switch (action.type) {
    case 'DEFAULT_ACTION':
      return state;
    default:
      return state;
  }
}

function* defaultSaga() {
  // See example in containers/HomePage/saga.js
}

const mapStateToProps = createStructuredSelector({
  // adminpage: makeSelectAdminPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'adminPage', reducer: adminPageReducer });
const withSaga = injectSaga({ key: 'adminPage', saga: defaultSaga });



export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(Index)
