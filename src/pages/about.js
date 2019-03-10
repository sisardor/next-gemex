import Layout from 'components/MyLayout'
import AdminPage from 'containers/AdminPage/Loadable'

export default () => (
  <Layout>
    <p>This is the about page</p>

    <a className="btn btn-block btn-outline-secondary" href={'/auth/oauth/facebook'}>
      Sign in with Facebook
    </a>
    <AdminPage/>
  </Layout>
)
