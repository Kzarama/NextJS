import React from 'react'
import Layout from '../components/layout/Layout'

import "../style.css"

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp