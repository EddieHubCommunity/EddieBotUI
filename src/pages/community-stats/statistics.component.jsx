import React from "react";
import "./statistics.styles.scss";

/**
 * @param {string} [props.className]
 * @param {string} props.title
 * @param {string} props.icon - Check this link to know the possible values: https://react.semantic-ui.com/elements/icon/
 * @param {any} props.value
 */
const Statistics = ({ className = "", title, value }) => (
  <div className={`statistic ${className}`}>
    <span className="title">{title}</span>
    <span className="value">{value}</span>
  </div>
);

export default Statistics;
