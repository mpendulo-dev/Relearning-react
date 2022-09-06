import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { useHistory } from 'react-router-dom'

const BlogDetails = () => {
  const {id} = useParams()
  const {data: blog, error, isPending} = useFetch(`http://localhost:8080/blogs/${id}`)
  const redirect = useHistory()

  const handleDelete = () => {
    fetch(`http://localhost:8080/blogs/${id}`, {
      method: 'DELETE',

    }).then(() => {
      redirect.push('/')
    })
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by <b>{blog.author}</b></p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}

    </div>
  )
}

export default BlogDetails