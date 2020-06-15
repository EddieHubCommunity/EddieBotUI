import React from "react";
import { List, Image } from "semantic-ui-react";

import "./user-message.styles.scss";

/**
 * @param {object} props
 * @param {UserMessage} props.message
 */
const UserMessage = ({ message }) => (
  <List.Item className="user-message">
    <Image avatar src={message.avatarUrl} />
    <List.Content>
      <List.Header>{message.userName}</List.Header>
      <List.Description className="text-reactions-wrapper">
        <span>{message.text}</span>
        <div className="reactions">
          Reactions: {message.reactions}
        </div>
      </List.Description>
    </List.Content>
  </List.Item>
);

export default UserMessage;

/**
 * @typedef UserMessage
 * @property {string} text
 * @property {string} avatarUrl
 * @property {string} userName
 * @property {number} reactions
 */
