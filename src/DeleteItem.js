import React from 'react';
import PropTypes from 'prop-types';

function DeleteItem(props) {
  return (
    <button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
		Delete Last Item
	</button>
  )
}

DeleteItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired
}

export default DeleteItem;