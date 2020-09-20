import React from "react";
import "./statistics.styles.scss";

/**
 * @param {object} props
 * @param {string} [props.className]
 * @param {string} props.title
 * @param {any} props.value
 */
const Statistics = ({ className = "", title, value }) => (
  <div className={`statistic ${className}`}>
    <span className="title">{title}</span>
    <span className="value">{value}</span>
  </div>
);

export default Statistics;
