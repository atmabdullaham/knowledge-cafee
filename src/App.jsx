import Articles from "./components/Articles";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("../public/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      <section className="flex flex-col md:flex-row gap-4">
        {/* Articles Section */}
        <Articles articles={articles}></Articles>
        {/* Bookmarks Section */}
        <Bookmarks></Bookmarks>
      </section>
    </div>
  );
};

export default App;
