import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import CommunityStatisticsPage from "./pages/community-stats/community-statistics.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={CommunityStatisticsPage} />
        </Switch>
      </>
    );
  }
}

export default App;
