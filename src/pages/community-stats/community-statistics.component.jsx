import React from "react";
import Statistics from "./statistics.component";

import "./community-statistics.styles.scss";

const CommunityStatisticsPage = () => {
  return (
    <div className="community-statistics-page">
      <h1 className="title">Community Statistics</h1>
      <div className="statistics-list">
        <Statistics className="messages" title="Total Messages" icon="envelope" value={900023} />
        <Statistics className="users" title="Total Users" icon="user" value={1230} />
        <Statistics className="reactions" title="Reactions"  icon="smile" value={35000} />
      </div>
    </div>
  );
};

export default CommunityStatisticsPage;
