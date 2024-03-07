import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types'; // ES6

const Blogs = ({ handleAddToBookmarks, handleMarkAsRead, bookmarks }) => {
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
          handleMarkAsRead={handleMarkAsRead}
          bookmarks={bookmarks}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  bookmarks: PropTypes.array,
};
export default Blogs;
