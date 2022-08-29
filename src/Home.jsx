import {useState, useEffect, React} from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'



const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8080/blogs')
  return (
    <div className='home'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading ...</div>}
        {blogs && <BlogList blogs={blogs} title="My blogs" />}
    </div>
  )
}

export default Home