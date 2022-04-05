import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          dispatch={store.dispatch.bind(store)} store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


reportWebVitals();
