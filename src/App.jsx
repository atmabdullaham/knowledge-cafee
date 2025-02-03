import Articles from "./components/Articles";
import Bookmarks from "./components/Bookmarks";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Articles Section */}
      <Articles></Articles>
      {/* Bookmarks Section */}
      <Bookmarks></Bookmarks>
    </div>
  );
};

export default App;
