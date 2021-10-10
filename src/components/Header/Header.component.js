import React, { Component } from "react";
import "./Header.component.css";
import { connect } from "react-redux";
import {
  offSearch,
  onSearchInitiated,
  onSearchValues,
} from "../../actions/searchActions";

class Header extends Component {
  handleSearch = () => {
    this.props.onSearch();
  };
  handleBackButton = () => {
    this.props.offSearch();
  };
  onHandleSearch = (e) => {
    let searchValues = e.target.value;
    this.props.onSearchValues(searchValues);
  };
  sear;
  render() {
    const { fetchingData, onSearchHandler } = this.props;
    const { pageDetails = {} } = fetchingData;
    const { title } = pageDetails;
    const { searchInitiated } = onSearchHandler;
    return (
      <div className="header">
        <img src={`../images/nav_bar.png`} alt="Navbar" className="navbar" />
        {searchInitiated && (
          <img
            src={`../images/Back.png`}
            alt="Back-button"
            className="back-btn"
            onClick={this.handleBackButton}
          />
        )}
        {!searchInitiated && (
          <h4 className="text-white p-1.5 text-lg header-title left-0">
            {title}
          </h4>
        )}
        {searchInitiated && (
          <input
            className="text-white p-1.5 text-lg header-title header-search"
            autoFocus
            placeholder="search movie name"
            type="text"
            onChange={this.onHandleSearch}
          />
        )}
        <img
          src={`../images/search.png`}
          alt="Search-icon"
          className="search"
          onClick={this.handleSearch}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  onSearch: () => dispatch(onSearchInitiated()),
  offSearch: () => dispatch(offSearch()),
  onSearchValues: (searchValues) => dispatch(onSearchValues(searchValues)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
