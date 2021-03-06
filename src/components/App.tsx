import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes';
import globalSelectors from '../redux/global/globalSelectors';
/* import - COMPONENTS */
import Header from './Header/Header';
import Loader from './Loader/Loader';
import Footer from './Footer/Footer';
import Layout from './Layout/Layout';
import { AppStateType } from '../redux/rootReducer';

const OneDayPage = lazy(() =>
  import('../pages/OneDayPage' /*webpackChunkName: "OneDayPage"*/),
);
const FiveDayPage = lazy(() =>
  import('../pages/FiveDayPage' /*webpackChunkName: "FiveDayPage"*/),
);

const App = ({ isLoading }: any) => (
  <BrowserRouter>
    <Header />
    {isLoading && <Loader />}

    <Layout>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.ONE_DAY_PAGE} component={OneDayPage} />
          <Route path={routes.FIVE_DAY_PAGE} component={FiveDayPage} />

          <Redirect to={routes.ONE_DAY_PAGE} />
        </Switch>
      </Suspense>
    </Layout>

    <Footer />
  </BrowserRouter>
);

const mapStateToProps = (state: AppStateType): object => ({
  isLoading: globalSelectors.isLoading(state),
});

export default connect(mapStateToProps)(App);
