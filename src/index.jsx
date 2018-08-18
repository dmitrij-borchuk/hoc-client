import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import reducers from './reducers';
import App from './App';
import LoginContainer from './views/LoginPage';
// import ResetPasswordPage from './views/ResetPasswordPage';

const store = createStore(
  reducers,
  // TODO: remove "composeWithDevTools" on production
  composeWithDevTools(applyMiddleware(thunk)),
);

// eslint-disable-next-line no-undef
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <LanguageProvider messages={messages}> */}
      <div>
        <CssBaseline />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          {/* <Route path="/resetPassword" component={ResetPasswordPage} /> */}
          {/* <Route path="/setPassword/:token" component={SetPasswordPage} /> */}
          <Route path="/" component={App} />
        </Switch>
      </div>
      {/* </LanguageProvider> */}
    </BrowserRouter>
  </Provider>,
  root,
);
