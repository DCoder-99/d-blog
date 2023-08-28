import { Route, Routes } from 'react-router-dom';
const Blog = () => {
  return (
    <Routes>
      <Route path="posts" element={<h1>Blog Posts</h1>} />
    </Routes>
  )
}

export default Blog