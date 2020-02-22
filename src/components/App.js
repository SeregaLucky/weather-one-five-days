import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "../routes";
import globalSelectors from "../redux/global/globalSelectors";
/* import - COMPONENTS */
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import Footer from "./Footer/Footer";
import Layout from "./Layout/Layout";
import OneDayPage from "../pages/OneDayPage/OneDayPage";
import FiveDayPage from "../pages/FiveDayPage/FiveDayPage";

const App = ({ isLoading }) => {
  return (
    <BrowserRouter>
      <Header />
      {isLoading && <Loader />}

      <Layout>
        <Switch>
          <Route exact path={routes.ONE_DAY_PAGE} component={OneDayPage} />
          <Route path={routes.FIVE_DAY_PAGE} component={FiveDayPage} />

          <Redirect to={routes.ONE_DAY_PAGE} />
        </Switch>
      </Layout>

      <Footer />
    </BrowserRouter>
  );
};

const mapStateToProps = state => ({
  isLoading: globalSelectors.isLoading(state)
});

// export default App;
export default connect(mapStateToProps)(App);
