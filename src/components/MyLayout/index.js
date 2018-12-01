import Header from '../Header/Loadable'
import GlobalStyle from '../../global-styles';
import TopNavigation from 'components/TopNavigation';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <TopNavigation />
    {props.children}
    <GlobalStyle/>
  </div>
)

export default Layout
