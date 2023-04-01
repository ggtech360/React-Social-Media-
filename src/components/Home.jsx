import React from 'react'
import CreatePost from "./CreatePost"
import Feed from "./Feed"
import Layout from "./Layout"

const Home = () => {
  return (
    <Layout>
        <CreatePost/>
        <Feed/>
        <Feed/>
        <Feed/>
    </Layout>
  )
}

export default Home
