import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import MainArticleForm from "./components/MainArticleForm/MainArticleForm";
import Footer from "./components/Footer/Footer";
import "./App.css";

import NAV_DATA from "./NavigationData";
import ARTICLE_DATA from "./ArticleData";

class App extends Component {
  state = {
    NAV_DATA: NAV_DATA,
    ARTICLE_DATA: ARTICLE_DATA,
  };
  render() {
    const { NAV_DATA } = this.state;
    const { ARTICLE_DATA } = this.state;

    return (
      <div className="App">
        <Navigation NAV_DATA={NAV_DATA} />
        <MainArticleForm ARTICLE_DATA={ARTICLE_DATA} />
        <Footer />
      </div>
    );
  }
}
export default App;
