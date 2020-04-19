import React, {Component, Fragment} from "react";

class DetailsPage extends Component {

  componentDidMount = () => {
    let {$movieDetails} = this.props;
    $movieDetails.fullReset();
    DetailsPage.fetch(this.props);
  };

  static fetch = (props) => {
    let {$movieDetails, id} = props;
    $movieDetails.fetchItem(id).then(() => console.log($movieDetails.item));
  };

  render() {
    let {$movieDetails} = this.props;
    return (
      <div className="container">
        <h1 className="white">Detail Page</h1>
        {
          $movieDetails.fetchDone &&
          <Fragment>
            <h3>{$movieDetails.item.title}</h3>
            <img style={{maxWidth: '100%'}} src={`https://image.tmdb.org/t/p/w500${$movieDetails.item.poster_path}`} alt={$movieDetails.item.title}/>
            <div>{$movieDetails.item.overview}</div>
          </Fragment>
        }
      </div>
    );
  }
}

export {DetailsPage}