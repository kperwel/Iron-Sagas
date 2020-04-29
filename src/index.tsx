import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducers';
import * as mui from '@material-ui/core/styles';

import App from './App';

const store = createStore(reducer, devToolsEnhancer({}));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <mui.ThemeProvider
        theme={mui.createMuiTheme({
          zIndex: {
            appBar: 1350
          }
        })}
      >
        <App />
      </mui.ThemeProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
