import PropTypes from 'prop-types'; // ES6
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead, bookmarks }) => {
  const {
    id,
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time_in_minutes,
    hashtags,
  } = blog;
  return (
    <div className="pb-9 pt-9 mb-2 bg-white">
      <img
        src={cover_img}
        alt={`Cover picture of the blog ${title}`}
        className="rounded-lg w-full"
      />
      <div className="flex justify-between my-5">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="me-2">{reading_time_in_minutes} min read</span>
          {bookmarks.some((blog) => blog.id === id) ? (
            <FaBookmark />
          ) : (
            <button
              className="text-2xl"
              onClick={() => {
                handleAddToBookmarks(blog);
              }}
              title="Add to Bookmarks"
            >
              <CiBookmark />
            </button>
          )}
        </div>
      </div>
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="my-5">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="me-4">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
      <button
        className="underline text-violet-700 font-semibold"
        onClick={() => {
          handleMarkAsRead(id, reading_time_in_minutes);
        }}
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
  bookmarks: PropTypes.array,
};
export default Blog;
