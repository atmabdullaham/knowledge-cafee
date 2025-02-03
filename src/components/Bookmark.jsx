const Bookmark = ({ bookm }) => {
  console.log(bookm);
  return (
    <div className="bg-white rounded-2xl px-5 py-2 text-lg font-semibold text-gray-600">
      <h2>{bookm.article_title}</h2>
    </div>
  );
};

export default Bookmark;
