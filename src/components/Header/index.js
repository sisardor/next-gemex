import Link from 'next/link'
import Wrapper from './Wrapper';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <Wrapper>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/admin">
          <a style={linkStyle}>Admin</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </Wrapper>
)

export default Header
