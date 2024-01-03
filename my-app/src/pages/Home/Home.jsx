import React from 'react'
import Cards from '../../components/Cards/Cards'
import {Helmet} from "react-helmet"

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Project</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Cards />
    </div>
  )
}

export default Home