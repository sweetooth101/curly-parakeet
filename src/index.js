import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {ProjectContext}  from './page/projects';



ReactDOM.render(
    <ProjectContext.Provider  >
        <App />
    </ProjectContext.Provider>
    ,
  document.getElementById('root')
);

