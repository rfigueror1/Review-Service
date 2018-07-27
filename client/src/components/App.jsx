import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import CSSModules from 'react-css-modules';
import styles from './app.css';
import Pagination from './Pagination.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing_id: props.listing_id,
      allReviews: [],
      currentReviews: [],
      currentPage: null,
      totalPages: null,
      ratings: {},
    };

    this.onPageChanged = this.onPageChanged.bind(this);
  }

  componentDidMount() {
    this.getRatings();
    this.getReviews();
  }

  onPageChanged(data) {
    console.log('app data', data);
    const { allReviews } = this.state;
    const { currentPage, totalPages, pageLimit } = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentReviews = allReviews.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentReviews, totalPages });
  }

  getReviews() {
    var listing_id = this.state.listing_id;
    var self = this;

    axios.get(`http://localhost:3002/api/listing/${listing_id}/reviews`)
      .then(function(response) {
        self.setState({allReviews: response.data});
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  getRatings() { 
    var listing_id = this.state.listing_id;
    var self = this;

    axios.get(`http://localhost:3002/api/listing/${listing_id}/overview`)
      .then(function(response) {
        self.setState({ratings: response.data});
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    const { allReviews, currentReviews, currentPage, totalPages } = this.state;
    const totalReviews = allReviews.length;
    console.log('total reviews, ', totalReviews)

    return (
      <div styleName='main-container'>
        <Overview ratings={this.state.ratings}/>
        <Pagination totalRecords={totalReviews} pageNeighbours={1} onPageChanged={this.onPageChanged} />
      </div>
    );
  }
}

export default CSSModules(App, styles);

// module.exports.App = App;