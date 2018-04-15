import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import './styles.css';
import reducers from './reducers';
import App from './App';
import LoginContainer from './views/LoginPage';

const store = createStore(
  reducers,
  // TODO: remove "composeWithDevTools" on production
  composeWithDevTools(applyMiddleware(thunk)),
);
const theme = createMuiTheme();

// eslint-disable-next-line no-undef
const root = document.getElementById('root');
// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   root,
// );

render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <LanguageProvider messages={messages}> */}
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          {/* <Route path="/resetPassword" component={ResetPasswordPage} />
          <Route path="/setPassword/:token" component={SetPasswordPage} /> */}
          <Route path="/" component={App} />
        </Switch>
      </MuiThemeProvider>
      {/* </LanguageProvider> */}
    </BrowserRouter>
  </Provider>,
  root,
);
