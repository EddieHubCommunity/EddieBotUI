import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import CommunityStatisticsPage from "./pages/community-stats/community-statistics.component";
import PopularMessagesPage from "./pages/popular-messages/popular-messages.component";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={CommunityStatisticsPage} />
          <Route exact path="/popular/messages" component={PopularMessagesPage} />
        </Switch>
      </>
    );
  }
}

export default App;
