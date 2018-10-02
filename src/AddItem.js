import React from 'react';
import PropTypes from 'prop-types';

function AddItem(props) {
  return (
    	<form onSubmit={props.addItem}>
			<input
				type="text"
				placeholder="Enter New Item"
				value={props.value}
				onChange={props.handleChange}
			/>
			<button disabled={props.inputIsEmpty()}>Add</button>
		</form>
  )
}

AddItem.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
}

export default AddItem;