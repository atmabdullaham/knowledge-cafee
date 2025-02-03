import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmark }) => {
  return (
    <div className=" bg-gray-100 rounded-2xl flex flex-col gap-2 px-4 py-4">
      <h2 className="text-xl font-bold py-2 pl-2">
        Bookmarked Blogs: {bookmark.length}
      </h2>
      {bookmark.map((bookm) => (
        <Bookmark key={bookm.article_id} bookm={bookm}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
