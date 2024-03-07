import PropTypes from 'prop-types'; // ES6
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 m-9 h-min">
      <div className="bg-violet-200 p-5 flex justify-center items-center rounded-lg border-2 border-violet-700">
        <h3 className="text-violet-700 text-2xl font-bold">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className=" px-4 pt-10 pb-8 bg-slate-200 rounded-lg mt-6">
        <h2 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
