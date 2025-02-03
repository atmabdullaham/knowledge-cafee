import Articles from "./components/Articles";
import Header from "./components/Header";
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  useEffect(() => {
    fetch("../public/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  const handleBookmark = (article) => {
    setBookmark([...bookmark, article]);
  };
  const calculateReadingTime = (time) => {
    const intTime = parseInt(time);
    setReadingTime(intTime + readingTime);
  };
  const handleRemove = (id) => {
    const deletedBookmark = bookmark.filter(
      (bookmark) => bookmark.article_id !== id
    );
    setBookmark(deletedBookmark);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      <section className="flex flex-col md:flex-row gap-6 mt-3">
        {/* Articles Section */}
        <Articles
          articles={articles}
          handleBookmark={handleBookmark}
          calculateReadingTime={calculateReadingTime}
          handleRemove={handleRemove}
        ></Articles>
        {/* Bookmarks Section */}
        <Sidebar bookmark={bookmark} readingTime={readingTime}></Sidebar>
      </section>
    </div>
  );
};

export default App;
