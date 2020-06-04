import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import CommunityStatisticsPage from "./pages/community-stats/community-statistics.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={CommunityStatisticsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
