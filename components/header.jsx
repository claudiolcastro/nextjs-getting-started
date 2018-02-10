import Link from 'next/link'

const linkStyle = {
  'font-family': 'Arial',
  'marginRight': 15,
  'text-decoration': 'none',
  'color': '#575757'
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header