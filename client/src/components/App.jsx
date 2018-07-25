import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing_id: props.listing_id,
      allReviews: [],
      currentReviews: [],
      currentPage: null,
      totalPages: null,
      ratings: {}
    }
  }

  componentDidMount() {
    this.getRatings();
    this.getReviews();
  }

  getReviews() {
    var listing_id = this.state.listing_id;
    var self = this;

    axios.get(`http://localhost:3002/api/listing/${listing_id}/reviews`)
      .then(function(response) {
        self.setState({allReviews: response.data});
        console.log(response);
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
        console.log(response);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p styleName="blue">this is working?</p>
        <Overview ratings={this.state.ratings}/>
      </div>
    );
  }
}

module.exports = App;

export default CSSModules(App, styles);