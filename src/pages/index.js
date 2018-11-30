import Link from 'next/link'
import { connect } from 'react-redux';
import { compose } from 'redux';
import fetch from 'isomorphic-unfetch'
import injectReducer from 'utils/injectReducer';
import { fetchListings, fetchCategories } from 'containers/HomePage/actions'
import Layout from 'components/MyLayout'
import HomePage from 'containers/HomePage/Loadable';


class Index extends React.Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx
    store.dispatch(fetchListings())
    store.dispatch(fetchCategories())
    return { isServer }
  }

  componentDidMount () {
    // this.props.dispatch(fetchListings())
  }
  fetchTest = () => {
    this.props.dispatch(fetchListings())
  }
  render () {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        <form method='GET' action='/greeting'>
          Name: <input name='name' />
          <input type='submit' />
        </form>
        <button onClick={() => this.fetchTest()}>Fetch</button>
        <HomePage />
      </Layout>
    );
  }
}






import { fromJS } from 'immutable';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../utils/injectSaga';
// import reducer from 'containers/HomePage/reducer';

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

// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'adminPage', saga: defaultSaga });



export default compose(
  // withReducer,
  // withSaga,
  withConnect,
)(Index)
