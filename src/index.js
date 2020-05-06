import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import { getProductsFromApi } from './redux/actions'

store.dispatch(getProductsFromApi())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
