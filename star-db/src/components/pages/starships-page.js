import React, { Component } from 'react';
import { StarshipList, StarshipDetails } from '../sw-components';
import { withRouter } from 'react-router-dom';
import Row from '../row';

const StarshipsPage = ({ history, match }) => {
  
  const { id } = match.params;

  return (
    <Row
      left={<StarshipList onItemSelected={(id) => history.push(id)} />}
      right={<StarshipDetails itemId={id} />} />
  );
  };

  
export default withRouter(StarshipsPage);
  
    /*

export default class  StarshipsPage extends Component  {

  
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />} />
    );
  }

};
  */
  

