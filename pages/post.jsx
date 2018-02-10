import Layout from '../components/myLayout'

const h1Style = {
  'font-family': 'Arial',
}

export default (props) => (
  <Layout>
    <h1 style={h1Style}>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
)