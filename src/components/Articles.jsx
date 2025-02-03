import Article from "./Article";

const Articles = ({
  articles,
  handleBookmark,
  calculateReadingTime,
  handleRemove,
}) => {
  return (
    <div className="md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {articles.map((article) => (
        <Article
          key={article.article_id}
          handleBookmark={handleBookmark}
          article={article}
          calculateReadingTime={calculateReadingTime}
          handleRemove={handleRemove}
        ></Article>
      ))}
    </div>
  );
};

export default Articles;
