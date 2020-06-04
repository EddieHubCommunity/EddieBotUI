import React from "react";

import "./community-statistics.styles.scss";

const CommunityStatisticsPage = () => {
  return (
    <div className="community-stats-page">
      <h1 className="title">Community Statistics</h1>
      <div className="statistics-container">
        <div className="statistic-block">
          <h1>Messages</h1>
          <span>123</span>
        </div>
        <div className="statistic-block">
          <h1>Messages</h1>
          <span>123</span>
        </div>
        <div className="statistic-block">
          <h1>Messages</h1>
          <span>123</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityStatisticsPage;
