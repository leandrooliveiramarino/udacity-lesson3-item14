import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class ListItems extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render() {
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {this.props.items.map((item, index) => <ListItem key={index} item={item}/>)}
        </ol>
      </div>
    )
  }
}

export default ListItems;