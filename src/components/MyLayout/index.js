import Header from '../Header/Loadable'
import GlobalStyle from '../../global-styles';
import TopNavigation from 'components/TopNavigation';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Layout = (props) => (
  <Div>
    <Header />
    <TopNavigation />
      {props.children}
    <GlobalStyle/>
  </Div>
)

export default Layout
