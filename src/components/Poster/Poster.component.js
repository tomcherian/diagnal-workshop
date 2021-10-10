import React, { Component } from "react";
import "./Poster.component.css";
import { connect } from "react-redux";
import { loadPageTwo } from "../../actions/posterListingActions";

class Poster extends Component {
  render() {
    const { fetchingData, onSearchHandler } = this.props;
    const { posters = [] } = fetchingData;
    const { searchInitiated, filteredPosters } = onSearchHandler;
    const resultPosters = !searchInitiated ? posters : filteredPosters;
    return (
      <div className="poster" onScroll={this.handleScroll}>
        {resultPosters.map((item, index) => {
          return (
            <div key={index} className="poster-outline">
              {
                <img
                  src={`../images/${item["poster-image"]}`}
                  alt={item.name}
                  className="poster-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "../images/placeholder_for_missing_posters.png";
                  }}
                />
              }
              <p className="poster-name truncate">{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  loadPageTwo: () => dispatch(loadPageTwo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Poster);
