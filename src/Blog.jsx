import React, { useState } from 'react'

const Blog = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setIsPending] = useState('false')

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8080/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog created')
      setIsPending(true)
    })
  }
  return (
    <div className="create">
      <div>Add a new blog</div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Blog Title:</label>
            <input type="text" id='title' 
            required value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="body">Blog body</label>
            <textarea type="text" 
            id='body' required
            onChange={(e) => setBody(e.target.value)}
            />

            <label htmlFor="author">Author</label>
            <input type="text" 
            id='author' required
            onChange={(e) => setAuthor(e.target.value)}
            />

            {!isPending && <button>Add Blog</button>}
            {isPending && <button>Add Blog</button>}

        </form>
    </div>
    
  )
}

export default Blog