import React from 'react';
import PropTypes from 'prop-types';

function Todos({items, onItemClicked, onItemRemove}) {
  function remove(id) {
    if (window.confirm('Are you sure?')) {
      onItemRemove(id);
    }
  }

  return (
    <ul className="list-group">
      {
        items.map(({title, id, done}) => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            {done === true ? <s>{title}</s> : title}
            <div className='btn btn-group'>
              <button className='btn btn-outline-danger' onClick={remove.bind(this, id)}>Remove</button>
              <button className='btn btn-outline-primary' onClick={onItemClicked.bind(this, id)}>Done</button>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

Todos.propTypes = {
  items: PropTypes.array,
  onItemClicked: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func.isRequired,
};

export default Todos;
