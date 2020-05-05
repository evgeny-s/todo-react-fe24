import React from 'react';

function Todos({items, onItemClicked}) {
  return (
    <ul className="list-group">
      {
        items.map(({title, id, done}) => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            {done === true ? <s>{title}</s> : title}
            <div className='btn btn-group'>
              <button className='btn btn-outline-danger' onClick={() => {console.warn('remove!!!')}}>Remove</button>
              <button className='btn btn-outline-primary' onClick={onItemClicked.bind(this, id)}>Done</button>
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default Todos;
