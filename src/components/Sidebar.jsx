import Bookmarks from "./Bookmarks";
import Time from "./Time";

const Sidebar = ({ bookmark, readingTime }) => {
  return (
    <div className="md:w-1/3 flex flex-col gap-4 ">
      {/* time */}
      <Time readingTime={readingTime}></Time>
      {/* Bookmark */}
      <Bookmarks bookmark={bookmark}></Bookmarks>
    </div>
  );
};

export default Sidebar;
