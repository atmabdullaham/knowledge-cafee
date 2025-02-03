import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <div className="md:w-2/3 flex flex-col gap-6">
      Articles: {articles.length}
      {articles.map((article) => (
        <Article key={article.article_id} article={article}></Article>
      ))}
    </div>
  );
};

export default Articles;
