import PropTypes from 'prop-types'; // ES6

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="p-4 bg-white my-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
