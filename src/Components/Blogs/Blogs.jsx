import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleAddToBookmarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 bg-slate-200">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmarks={handleAddToBookmarks}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
