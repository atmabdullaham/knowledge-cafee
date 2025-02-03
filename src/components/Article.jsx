const Article = ({
  article,
  handleBookmark,
  calculateReadingTime,
  handleRemove,
}) => {
  // console.log(article);
  return (
    <div>
      <div className="card bg-base-100 border-1 border-gray-300">
        <figure className="">
          <img
            className="h-80 w-full"
            src={article.article_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src={article.author_image}
                alt=""
              />
              <div className="flex flex-col gap-1 ite">
                <h4 className="text-xl font-semibold">{article.author_name}</h4>
                <p className="text-base font-medium text-gray-500">
                  {article.posted_date}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center text-base font-semibold justify-center">
              <h4 className="text-base font-semibold">
                {article.reading_time} Minute
              </h4>
              <i
                onClick={() => handleBookmark(article)}
                className="fa-regular fa-bookmark cursor-pointer"
              ></i>
            </div>
          </div>
          <h2 className="card-title mt-2 text-xl font-bold">
            {article.article_title}{" "}
          </h2>
          <div className="flex gap-4 text-base font-medium text-gray-500">
            {article.hashtag.map((tag, index) => (
              <h4 key={index}>{tag}</h4>
            ))}
          </div>
          <div className="card-actions">
            <button
              onClick={() => {
                calculateReadingTime(article.reading_time),
                  handleRemove(article.article_id);
              }}
              className="btn bg-blue-50 border border-blue-100 hover:border-blue-200 mt-2 text-base font-semibold"
            >
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
