import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.component";
import PosterListingPage from "./components/PosterListingPage/PosterListingPage.component";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PosterListingPage />
      </div>
    );
  }
}

export default App;
