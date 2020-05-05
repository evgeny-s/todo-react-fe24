import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Filter from './components/Filter';
import Todos from './containers/Todos';
import Form from './containers/Form';

function App() {
  return (
    <div className="container">
      <Filter />
      <Form />
      <Todos />
    </div>
  );
}

export default App;
