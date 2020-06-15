import React from "react";
import PropTypes from "prop-types";
import { List, Image } from "semantic-ui-react";

import "./user-message.styles.scss";

const UserMessage = (props) => {
  const { message } = props;
  return (
    <List.Item className="user-message">
      <Image avatar src={message.avatarUrl} />
      <List.Content>
        <List.Header>{message.userName}</List.Header>
        <List.Description className="text-reactions-wrapper">
          <span>{message.text}</span>
          <div className="reactions">Reactions: {message.reactions}</div>
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

UserMessage.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    reactions: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
  }),
};

export default UserMessage;
