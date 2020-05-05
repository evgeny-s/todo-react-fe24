import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Filter from './components/Filter';
import Todos from './containers/Todos';
import Form from './containers/Form';

function App() {
  return (
    <div className="container">
      <h1>TODO with Redux</h1>
      <Filter />
      <Form />
      <Todos />
    </div>
  );
}

export default App;
