import Link from 'next/link'

const Index = () => (
  <div>
    <h2>Hello Next.js</h2>
    <Link href='/about'>
      {/* <a style={{ textDecoration: 'none', color: '#000' }}>about page</a> */}
      <button>Go to Abou page</button>
    </Link>
  </div>
)

export default Index