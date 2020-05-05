import React from 'react';
import PropTypes from 'prop-types';

function Form({newItem, newItemChanged, onSubmit}) {
  function submit(e) {
    if (!newItem) {
      return alert('Please enter name for todo!');
    }

    onSubmit(e);
  }

  return (
    <div className="input-group mb-3">
      <input
        onChange={newItemChanged}
        value={newItem}
        type="text"
        className="form-control"
        placeholder="Add todo"
        aria-label="Add todo"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-success" type="button" onClick={submit}>Button</button>
      </div>
    </div>
  );
}

Form.propTypes = {
  newItem: PropTypes.string,
  newItemChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
