import PropTypes from 'prop-types'; // ES6

const Blog = ({ blog }) => {
  const {
    title,
    cover_img,
    author,
    author_img,
    posted_date,
    reading_time_in_minutes,
  } = blog;
  return (
    <div>
      <img src={cover_img} alt={`Cover picture of the blog ${title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>Reaading Time: {reading_time_in_minutes} min</span>
        </div>
      </div>
      <h2>{title}</h2>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
