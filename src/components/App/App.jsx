import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProtectedComponent from '../HOC/ProtectedComponent';
import SigninPage from '../../pages/SigninPage';
import BooksPage from '../../pages/BooksPage';
import NotFoundPage from '../../pages/NotFoundPage';

function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/signin" />
      <Route path="/signin" component={SigninPage} />
      <ProtectedComponent path="/books" component={BooksPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
