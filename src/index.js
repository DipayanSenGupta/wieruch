import React from 'react';
import ReactDOM from 'react-dom';
import {ComponentWillMount} from "./ComponentWillMount";



ReactDOM.render(
    <ComponentWillMount color='red' />,
    document.getElementById('root')
  );

  setTimeout(() => {
    ReactDOM.render(
        <ComponentWillMount color='green' />,
        document.getElementById('root')
      );
  },2000)
