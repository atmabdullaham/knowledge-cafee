import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <div className="md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {articles.map((article) => (
        <Article key={article.article_id} article={article}></Article>
      ))}
    </div>
  );
};

export default Articles;
